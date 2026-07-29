// RetirePath App — Main application logic
(function() {
  'use strict';

  // ── State ──────────────────────────────────────────
  let currentCountry = null;
  let currentLang = 'zh';  // Default to Chinese
  let currentPage = 'home';

  // ── DOM refs ────────────────────────────────────────
  const $ = id => document.getElementById(id);
  const navHome = $('nav-home');
  const navCalc = $('nav-calc');
  const navInfo = $('nav-info');
  const navNews = $('nav-news');
  const countrySelect = $('country-select');
  const pageHome = $('page-home');
  const pageCalc = $('page-calc');
  const pageInfo = $('page-info');
  const pageNews = $('page-news');

  // ── Merge supplementary pension policy detail ─────
  // PENSION_EXTRA (from js/pension_extra.js) adds bilingual eligibility /
  // contrib / recent_reform fields per country. Merge onto the country
  // objects so the existing lf() localisation helper can read them.
  if (typeof PENSION_EXTRA !== 'undefined') {
    COUNTRIES.forEach(c => {
      const e = PENSION_EXTRA[c.code];
      if (e) Object.assign(c, e);
    });
  }

  // ── Init ──────────────────────────────────────────
  function detectCountry() {
    const lang = navigator.language || navigator.userLanguage || 'zh-CN';
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';

    // Country code mapping from locale/timezone
    const localeMap = {
      'zh-CN': 'CN','zh-HK': 'HK','zh-TW': 'TW','zh-SG': 'SG',
      'ja': 'JP','ko': 'KR','fr': 'FR','de': 'DE','it': 'IT',
      'es': 'ES','pt': 'PT','ru': 'RU','ar': 'AE','hi': 'IN',
      'bn': 'BD','nl': 'NL','pl': 'PL','sv': 'SE','da': 'DK',
      'fi': 'FI','no': 'NO','cs': 'CZ','sk': 'SK','hu': 'HU',
      'ro': 'RO','bg': 'BG','el': 'GR','tr': 'TR','th': 'TH',
      'vi': 'VN','id': 'ID','ms': 'MY','uk': 'UA','hr': 'HR',
      'lt': 'LT','lv': 'LV','et': 'EE','sl': 'SI','he': 'IL'
    };

    const tzMap = {
      'America/New_York': 'US','America/Chicago': 'US','America/Los_Angeles': 'US',
      'America/Toronto': 'CA','America/Vancouver': 'CA',
      'America/Sao_Paulo': 'BR','America/Mexico_City': 'MX',
      'America/Argentina/Buenos_Aires': 'AR','America/Santiago': 'CL',
      'America/Bogota': 'CO','America/Lima': 'PE',
      'Europe/London': 'GB','Europe/Paris': 'FR','Europe/Berlin': 'DE',
      'Europe/Rome': 'IT','Europe/Madrid': 'ES','Europe/Amsterdam': 'NL',
      'Europe/Warsaw': 'PL','Europe/Stockholm': 'SE',
      'Europe/Zurich': 'CH','Europe/Vienna': 'AT',
      'Europe/Moscow': 'RU','Europe/Istanbul': 'TR',
      'Asia/Tokyo': 'JP','Asia/Seoul': 'KR','Asia/Shanghai': 'CN',
      'Asia/Hong_Kong': 'HK','Asia/Taipei': 'TW','Asia/Singapore': 'SG',
      'Asia/Kolkata': 'IN','Asia/Bangkok': 'TH','Asia/Jakarta': 'ID',
      'Asia/Kuala_Lumpur': 'MY','Asia/Dhaka': 'BD',
      'Asia/Dubai': 'AE','Asia/Riyadh': 'SA','Asia/Qatar': 'QA',
      'Asia/Jerusalem': 'IL','Asia/Manila': 'PH',
      'Australia/Sydney': 'AU','Australia/Melbourne': 'AU',
      'Pacific/Auckland': 'NZ',
      'Africa/Cairo': 'EG','Africa/Nairobi': 'KE','Africa/Lagos': 'NG',
      'Africa/Johannesburg': 'ZA','Africa/Accra': 'GH',
      'Africa/Casablanca': 'MA','Africa/Gaborone': 'BW',
      'Africa/Kampala': 'UG','Africa/Dar_es_Salaam': 'TZ'
    };

    let code = localeMap[lang] || tzMap[tz] || 'US';

    // Check country exists
    if (!COUNTRIES.find(c => c.code === code)) {
      code = 'US';
    }
    return code;
  }

  function getUILang(countryCode) {
    return COUNTRY_LANG[countryCode] || 'en';
  }

  function init() {
    // Populate country selector
    COUNTRIES.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.code;
      const flag = c.flag ? c.flag + ' ' : '';
      opt.textContent = flag + (c.name_local ?
        c.name_local + ' (' + c.name_en + ')' :
        c.name_en);
      countrySelect.appendChild(opt);
    });

    // Detect
    const detected = detectCountry();
    setCountry(detected);

    // Events
    countrySelect.addEventListener('change', function() {
      setCountry(this.value);
    });

    navHome.addEventListener('click', e => { e.preventDefault(); navigate('home'); });
    navCalc.addEventListener('click', e => { e.preventDefault(); navigate('calc'); });
    navInfo.addEventListener('click', e => { e.preventDefault(); navigate('info'); });
    navNews.addEventListener('click', e => { e.preventDefault(); navigate('news'); });

    // Home cards → navigate to corresponding pages
    const cardRoutes = { 'card-calc': 'calc', 'card-info': 'info', 'card-news': 'news' };
    const goToPage = page => {
      navigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    Object.entries(cardRoutes).forEach(([id, page]) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('click', () => goToPage(page));
      el.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          goToPage(page);
        }
      });
    });

    // CTA button
    document.addEventListener('click', function(e) {
      if (e.target.closest('#cta-btn')) {
        e.preventDefault();
        navigate('calc');
      }
    });

    // Calc form
    $('calc-form').addEventListener('submit', function(e) {
      e.preventDefault();
      calculate();
    });

    // Spouse toggle
    $('include-spouse').addEventListener('change', function() {
      $('spouse-group').classList.toggle('hidden', !this.checked);
    });

    navigate('home');
  }

  // ── Country switching ──────────────────────────────
  function setCountry(code) {
    const country = COUNTRIES.find(c => c.code === code);
    if (!country) return;

    currentCountry = country;
    currentLang = getUILang(code);
    countrySelect.value = code;

    // Update UI language
    document.documentElement.lang = currentLang;

    // Update detection badge — flag and name merged for adjacency
    const flag = country.flag || '';
    $('detect-name').textContent = flag + (country.name_local || country.name_en);

    // Rerender current page
    renderPage();
  }

  // ── Translation ────────────────────────────────────
  function t(key) {
    const langData = I18N[currentLang] || I18N.en;
    return langData[key] || I18N.en[key] || key;
  }

  // ── Navigation ────────────────────────────────────
  function navigate(page) {
    currentPage = page;
    renderPage();
  }

  function renderPage() {
    // Update nav active
    [navHome, navCalc, navInfo, navNews].forEach(n => n.classList.remove('active'));
    const navMap = { home: navHome, calc: navCalc, info: navInfo, news: navNews };
    if (navMap[currentPage]) navMap[currentPage].classList.add('active');

    // Show page
    pageHome.classList.add('hidden');
    pageCalc.classList.add('hidden');
    pageInfo.classList.add('hidden');
    pageNews.classList.add('hidden');

    switch (currentPage) {
      case 'home': renderHome(); break;
      case 'calc': renderCalc(); break;
      case 'info': renderInfo(); break;
      case 'news': renderNews(); break;
    }
  }

  // ── Home ───────────────────────────────────────────
  function renderHome() {
    pageHome.classList.remove('hidden');
    document.title = t('site_title');

    // Update i18n strings
    const i18nAttrs = {
      'home-hero-title': 'home_hero_title',
      'home-hero-desc': 'home_hero_desc',
      'home-detect-label': 'home_detected_as',
      'detect-msg': 'home_not_your',
      'cta-btn': 'home_cta',
      'cta-sub': 'home_cta_sub',
      'home-card1-title': 'home_card1_title',
      'home-card1-desc': 'home_card1_desc',
      'home-card2-title': 'home_card2_title',
      'home-card2-desc': 'home_card2_desc',
      'home-card3-title': 'home_card3_title',
      'home-card3-desc': 'home_card3_desc'
    };

    for (const [id, key] of Object.entries(i18nAttrs)) {
      const el = document.getElementById(id);
      if (el) el.textContent = t(key);
    }

    // Update nav
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
  }

  // ── Calculator ──────────────────────────────────────
  function renderCalc() {
    pageCalc.classList.remove('hidden');
    document.title = t('calc_title') + ' — RetirePath';

    const i18nAttrs = {
      'calc-title': 'calc_title',
      'calc-info': 'calc_info',
      'calc-label-age': 'calc_label_age',
      'calc-label-savings': 'calc_label_savings',
      'calc-label-income': 'calc_label_income',
      'calc-label-expense': 'calc_label_expense',
      'calc-label-spouse': 'calc_label_spouse',
      'calc-label-spouse-income': 'calc_label_spouse_income',
      'calc-btn': 'calc_btn'
    };

    for (const [id, key] of Object.entries(i18nAttrs)) {
      const el = document.getElementById(id);
      if (el) el.textContent = t(key);
    }
  }

  function calculate() {
    if (!currentCountry) return;

    const age = parseInt($('current-age').value) || 30;
    const savings = parseFloat($('current-savings').value) || 0;
    const income = parseFloat($('monthly-income').value) || 0;
    const expense = parseFloat($('monthly-expense').value) || 0;
    const includeSpouse = $('include-spouse').checked;
    const spouseIncome = includeSpouse ? (parseFloat($('spouse-income').value) || 0) : 0;

    const retireAge = currentCountry.retire_m || 65;
    const replRate = (currentCountry.repl_rate || 60) / 100;
    const inflation = 0.03;

    const yearsLeft = retireAge - age;
    const targetIncome = (income + spouseIncome) * replRate;
    const monthlyNeeded = Math.max(targetIncome, expense);
    const yearsNeeded = (currentCountry.life_exp || 80) - retireAge;
    const monthsNeeded = yearsNeeded * 12;

    // Future value with inflation
    const realReturn = 0.05; // 5% nominal - 3% inflation = 2% real
    const futureMonthlyNeed = monthlyNeeded * Math.pow(1 + inflation, yearsLeft);
    const totalNeeded = futureMonthlyNeed * monthsNeeded;

    const pmtSavings = Math.max(income + spouseIncome - expense, 0);
    const futureValue = savings * Math.pow(1 + realReturn, yearsLeft) +
      pmtSavings * 12 * ((Math.pow(1 + realReturn, yearsLeft) - 1) / realReturn);

    const gap = totalNeeded - futureValue;
    const monthlyRetire = futureValue / monthsNeeded;

    // Format
    const fmt = n => new Intl.NumberFormat(currentLang === 'zh' ? 'zh-CN' :
      currentLang === 'ja' ? 'ja-JP' :
      currentLang === 'ko' ? 'ko-KR' : 'en-US', {
      style: 'currency', currency: currentCountry.currency || 'USD',
      minimumFractionDigits: 0, maximumFractionDigits: 0
    }).format(Math.round(n));

    $('result-years').textContent = Math.max(0, yearsLeft) + ' ' + t('years_unit');
    $('result-need').textContent = fmt(totalNeeded);
    $('result-gap').textContent = fmt(Math.max(0, gap));
    $('result-monthly').textContent = fmt(monthlyRetire);

    $('calc-assume').textContent = t('calc_assume')
      .replace('{}', retireAge)
      .replace('{}', currentCountry.repl_rate || '60')
      .replace('{}', '3');
  }

  // ── Info ─────────────────────────────────────────────

  // Get localized field: when lang is 'zh', try field_zh first, fallback to field
  function lf(obj, field) {
    if (currentLang === 'zh' && obj[field + '_zh']) {
      return obj[field + '_zh'];
    }
    return obj[field];
  }

  function renderInfo() {
    pageInfo.classList.remove('hidden');
    if (!currentCountry) return;
    document.title = t('info_title') + ' — RetirePath';

    const c = currentCountry;

    $('info-title').textContent = t('info_title');
    $('info-subtitle').textContent = t('info_subtitle') + ' ' + (c.name_local || c.name_en);

    $('info-how-title').textContent = t('info_how');
    $('info-how-content').textContent = lf(c, 'pension_sys') ||
      (currentLang === 'zh' ? '暂无详细数据，正在持续更新中。' : 'Data not yet available. Please check back later.');

    $('info-strength-title').textContent = t('info_strength');
    $('info-strength-content').textContent = lf(c, 'strength') || '—';

    $('info-weakness-title').textContent = t('info_weakness');
    $('info-weakness-content').textContent = lf(c, 'weakness') || '—';

    $('info-tax-title').textContent = t('info_tax');
    $('info-tax-content').textContent = lf(c, 'tax') || '—';

    $('info-trend-title').textContent = t('info_trend');
    $('info-trend-content').textContent = lf(c, 'retire_trend') || '—';

    const extraLabels = (typeof PENSION_EXTRA_LABELS !== 'undefined')
      ? (PENSION_EXTRA_LABELS[currentLang] || PENSION_EXTRA_LABELS.en)
      : { eligibility: 'Eligibility', contrib: 'Contributions', reform: 'Recent Reforms' };

    $('info-eligibility-title').textContent = extraLabels.eligibility;
    $('info-eligibility-content').textContent = lf(c, 'eligibility') || '—';

    $('info-contrib-title').textContent = extraLabels.contrib;
    $('info-contrib-content').textContent = lf(c, 'contrib') || '—';

    $('info-reform-title').textContent = extraLabels.reform;
    $('info-reform-content').textContent = lf(c, 'recent_reform') || '—';

    $('info-source').textContent = t('info_source');
  }

  // ── News ─────────────────────────────────────────────
  function renderNews() {
    pageNews.classList.remove('hidden');
    if (!currentCountry) return;
    document.title = t('news_title') + ' — RetirePath';

    $('news-title').textContent = t('news_title');
    $('news-subtitle').textContent = t('news_subtitle') + ' ' + (currentCountry.name_local || currentCountry.name_en);
    $('news-source-link').textContent = t('news_source');

    const news = getNewsForCountry(currentCountry.code, currentLang);
    const container = $('news-container');
    container.innerHTML = '';

    if (news.length === 0) {
      container.innerHTML = '<p class="news-empty">' + t('news_empty') + '</p>';
      return;
    }

    news.forEach(item => {
      const div = document.createElement('div');
      div.className = 'news-item';

      const pubDate = item.pubDate ? new Date(item.pubDate).toLocaleDateString(
        currentLang === 'zh' ? 'zh-CN' : 'en-US',
        { year: 'numeric', month: 'short', day: 'numeric' }
      ) : '';

      div.innerHTML =
        '<h4><a href="' + item.url + '" target="_blank" rel="noopener">' +
        item.title + '</a></h4>' +
        '<p>' + item.summary + '</p>' +
        '<p class="news-meta">' + item.source + (pubDate ? ' — ' + pubDate : '') + '</p>';

      container.appendChild(div);
    });

    // Google News link
    const c = currentCountry;
    const searchName = (currentLang === 'zh') ? (c.name_local || c.name_en) : c.name_en;
    $('news-source-link').href = 'https://news.google.com/search?q=' +
      encodeURIComponent(searchName + ' ' + (NEWS_FALLBACK_CONFIG[currentLang] || NEWS_FALLBACK_CONFIG.en).query) +
      '&hl=' + currentLang;
  }

  // ── Text-size control (accessibility: A⁻ / A⁺) ──────
  (function setupTextSize(){
    var steps = [87.5, 93.75, 100, 112.5, 125]; // html font-size %
    var saved = parseFloat(localStorage.getItem('rp-text-scale'));
    var idx = steps.indexOf(saved);
    if (idx < 0) idx = steps.indexOf(100);
    var root = document.documentElement;
    function apply(){
      root.style.fontSize = steps[idx] + '%';
      try { localStorage.setItem('rp-text-scale', String(steps[idx])); } catch(e){}
    }
    apply();
    var smaller = document.getElementById('text-smaller');
    var larger = document.getElementById('text-larger');
    if (smaller) smaller.addEventListener('click', function(){
      if (idx > 0) { idx--; apply(); }
    });
    if (larger) larger.addEventListener('click', function(){
      if (idx < steps.length - 1) { idx++; apply(); }
    });
  })();

  // ── Boot ────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
