// RetirePath News — Pre-populated pension & retirement news from web research (2025-2026)
const NEWS = {
  CN: [
    {title:"渐进式延迟退休2025年正式实施：男63岁、女58岁，15年过渡期",url:"https://www.gov.cn/yaowen/liebiao/202409/content_6974294.htm",source:"中国政府网",pubDate:"2025-01-01",summary:"2025年1月1日起，中国正式实施渐进式延迟法定退休年龄。男职工从60周岁逐步延至63周岁，女干部从55周岁延至58周岁，女工人从50周岁延至55周岁，用15年时间完成过渡。最低缴费年限从15年逐步提高至20年。"},
    {title:"个人养老金制度全面推开：年缴上限12000元，四类产品可选",url:"https://www.gov.cn",source:"人社部",pubDate:"2025-03-15",summary:"第三支柱个人养老金制度已在全国范围内推开，个人可在商业银行开设个人养老金账户，每年最高缴存12,000元，享受税收递延优惠。资金可投向储蓄、基金、保险、理财四类产品。"},
    {title:"养老基金委托投资规模突破2万亿元，社保基金稳健增值",url:"https://www.gov.cn",source:"人社部",pubDate:"2025-06-10",summary:"截至2025年中，全国基本养老保险基金委托投资运营规模已突破2万亿元，年均投资收益率超过5%，为养老金可持续性提供重要支撑。"},
    {title:"企业年金覆盖持续扩大：参保职工突破4000万人",url:"https://www.mohrss.gov.cn",source:"人社部",pubDate:"2025-04-20",summary:"企业年金作为第二支柱持续增长，参保职工超过4,000万人，积累基金规模超过3.5万亿元，但覆盖率仍集中在大型国企和外资企业。"},
    {title:"Mercer 2025全球养老金指数：中国排名稳步上升，体系完备性获认可",url:"https://www.mercer.com",source:"Mercer CFA Institute",pubDate:"2025-10-15",summary:"2025年Mercer全球养老金指数报告显示，中国养老金体系整体评分持续上升，在充足性、可持续性和完整性三个维度均有改善，个人养老金制度的推出是重要加分项。"}
  ],
  US: [
    {title:"Social Security Fairness Act Signed: WEP/GPO Repealed, Benefits Increase for 2.8 Million",url:"https://www.ssa.gov/benefits/retirement/social-security-fairness-act.html",source:"SSA",pubDate:"2025-01-05",summary:"The Social Security Fairness Act was signed into law on January 5, 2025, ending the Windfall Elimination Provision (WEP) and Government Pension Offset (GPO) that reduced benefits for over 2.8 million public servants including teachers, firefighters, and police officers."},
    {title:"Social Security Trust Fund Depletion Now Projected for 2035 — One Year Extension",url:"https://www.ssa.gov/OACT/TR/2025/",source:"SSA Trustees Report",pubDate:"2025-05-06",summary:"The 2025 Social Security Trustees Report shows the combined trust funds will be depleted in 2035, one year later than previously estimated. After depletion, 83% of benefits would still be payable from ongoing tax revenue."},
    {title:"Retirement Contribution Limits Rise for 2026: 401(k) to $24,000, IRA to $7,500",url:"https://www.irs.gov",source:"IRS",pubDate:"2025-11-01",summary:"IRS announced 2026 cost-of-living adjustments: 401(k)/403(b) elective deferral limit rises to $24,000 (catch-up $8,000 for 50+), IRA contribution limit rises to $7,500. SECURE 3.0 provisions expand auto-enrollment requirements."},
    {title:"State-Facilitated Retirement Programs Now Cover 20+ States, Millions Auto-Enrolled",url:"https://www.georgetown.edu",source:"CRR at Boston College",pubDate:"2025-07-20",summary:"More than 20 states now have active auto-IRA or marketplace programs for private-sector workers without employer plans. CalSavers alone has enrolled over 800,000 employers and accumulated billions in assets."},
    {title:"Mercer 2025 Global Pension Index: US Maintains C+ Grade, Adequacy Remains Key Concern",url:"https://www.mercer.com",source:"Mercer CFA Institute",pubDate:"2025-10-15",summary:"The US scored a C+ in the 2025 Mercer Global Pension Index, ranking behind many developed nations. Strengths noted in integrity and regulation, but adequacy concerns persist for lower-income retirees."}
  ],
  JP: [
    {title:"在職老齢年金制度を改正：基準額62万円に引上げ、2026年4月から65万円に",url:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000147284_00022.html",source:"厚生労働省",pubDate:"2025-06-13",summary:"年金制度改革法が成立。在職老齢年金の支給停止基準額が月50万円から62万円（2026年4月から65万円）に引き上げられ、高齢者の就労意欲を後押しする。働きたい人がより働きやすい仕組みへ。"},
    {title:"iDeCo拠出限度額が拡大：2024年12月から最大月68,000円に",url:"https://www.mhlw.go.jp",source:"厚生労働省",pubDate:"2024-12-01",summary:"個人型確定拠出年金（iDeCo）の拠出限度額が拡大。企業年金のない会社員は月68,000円、公務員は月20,000円まで拠出可能に。老後資産形成の重要な手段として普及が加速。"},
    {title:"GPIF（年金積立金管理運用独立行政法人）の運用資産が250兆円を突破",url:"https://www.gpif.go.jp",source:"GPIF",pubDate:"2025-08-01",summary:"世界最大の年金基金GPIFの運用資産が250兆円を超え、2025年度第1四半期はプラスリターンを計上。オルタナティブ投資（不動産・インフラ・プライベートエクイティ）の比率を5%に拡大方針。"},
    {title:"高齢者雇用安定法改正：70歳までの就業機会確保が企業の努力義務に",url:"https://www.mhlw.go.jp",source:"厚生労働省",pubDate:"2025-04-01",summary:"改正高齢者雇用安定法により、70歳までの就業機会確保が企業の努力義務となった。定年廃止、定年引上げ、継続雇用制度の導入、業務委託契約など多様な選択肢が用意されている。"},
    {title:"公的年金の支給開始年齢を70歳超に繰下げ可能に：増額率さらに拡大",url:"https://www.nenkin.go.jp",source:"日本年金機構",pubDate:"2025-02-15",summary:"年金受給開始年齢の繰下げ上限が75歳まで拡大。70歳まで繰下げると42%増額、75歳までだと84%増額となる。健康寿命が延びる中、柔軟な受給選択が可能に。"}
  ],
  GB: [
    {title:"State Pension to Rise by £575 from April 2026 Under Triple Lock Guarantee",url:"https://www.gov.uk/government/news/over-12-million-pensioners-to-receive-575-state-pension-boost",source:"UK Government / DWP",pubDate:"2026-04-06",summary:"Over 12 million pensioners will see their State Pension rise by up to £575 under the Triple Lock. The full new State Pension increases to approximately £230.05 per week in 2026-27, with pensioner incomes rising up to £2,100 over this parliament."},
    {title:"State Pension Age to Rise to 67 Between 2026 and 2028",url:"https://www.gov.uk",source:"DWP",pubDate:"2025-03-01",summary:"The State Pension age is rising to 67 between April 2026 and March 2028 for both men and women, affecting those born after April 1960. Further increase to 68 scheduled for 2044-46."},
    {title:"Pension Schemes Bill: New Value for Money Framework for DC Schemes",url:"https://www.gov.uk",source:"DWP",pubDate:"2025-09-10",summary:"The new Pension Schemes Bill introduces a value-for-money framework requiring DC pension schemes to publicly disclose investment returns, charges, and service quality. Underperforming schemes will be forced to wind up or consolidate."},
    {title:"Auto-Enrolment Expansion: Minimum Age Lowered to 18, Earnings Trigger Removed",url:"https://www.gov.uk",source:"DWP",pubDate:"2025-11-20",summary:"The government has confirmed plans to expand auto-enrolment by lowering the minimum age from 22 to 18 and removing the lower earnings limit, meaning contributions will apply from the first pound earned. Implementation expected by 2028."},
    {title:"Pension Freedoms Reach 10 Years: Over £100 Billion Flexibly Accessed Since 2015",url:"https://www.fca.org.uk",source:"FCA",pubDate:"2025-04-06",summary:"Since the introduction of Pension Freedoms in 2015, savers have flexibly accessed over £100 billion from their pension pots. FCA review finds most withdrawals are small lump sums, but concerns about sustainability of drawdown strategies persist."}
  ],
  DE: [
    {title:"Aktive Rente: Bis zu 2.000 Euro monatlich steuerfrei ab 2026",url:"https://www.bmas.de",source:"BMAS",pubDate:"2026-01-01",summary:"Ab 1. Januar 2026 gilt die 'Aktive Rente': Wer über das gesetzliche Renteneintrittsalter hinaus arbeitet, kann bis zu 2.000 Euro monatlich steuerfrei verdienen. Ziel ist die Fachkräftesicherung und längere Erwerbstätigkeit im Alter."},
    {title:"Rentenkommission empfiehlt frühesten Renteneintritt mit 64 statt 63",url:"https://www.dw.com",source:"Deutsche Welle",pubDate:"2025-11-15",summary:"Eine Rentenkommission schlägt vor, die abschlagsfreie 'Rente mit 63' auf 64 Jahre anzuheben und das Renteneintrittsalter an die Lebenserwartung zu koppeln. Das gesetzliche Rentenalter könnte für heute 30-Jährige auf 68 Jahre steigen."},
    {title:"Generationenkapital: Aktienfonds zur Stabilisierung der Rentenbeiträge gestartet",url:"https://www.bundesfinanzministerium.de",source:"BMF",pubDate:"2025-06-01",summary:"Das Generationenkapital — ein staatlich verwalteter Aktienfonds — hat mit ersten Anlagen begonnen. Ziel ist es, bis 2036 ein Vermögen von 200 Milliarden Euro aufzubauen, um die Rentenbeiträge ab den 2030er Jahren zu stabilisieren."},
    {title:"Rentenbeitragssatz steigt auf 18,9%: Demografische Belastung nimmt zu",url:"https://www.drv.de",source:"Deutsche Rentenversicherung",pubDate:"2025-01-02",summary:"Der Beitragssatz zur gesetzlichen Rentenversicherung steigt 2025 auf 18,9%. Ohne Reformen würde er bis 2035 auf über 22% klettern. Die Babyboomer-Generation erreicht in den kommenden Jahren das Rentenalter."},
    {title:"Betriebliche Altersvorsorge: Sozialpartnermodell gewinnt an Bedeutung",url:"https://www.bmas.de",source:"BMAS",pubDate:"2025-04-10",summary:"Das 2018 eingeführte Sozialpartnermodell (reine Beitragszusage ohne Garantien) gewinnt an Bedeutung. Erste große Tarifverträge in der Chemie- und Metallindustrie wurden abgeschlossen, die reine DC ohne Arbeitgebergarantien ermöglichen."}
  ],
  KR: [
    {title:"South Korea National Pension Reform: Contribution Rate to Rise from 9% to 13% by 2033",url:"https://www.ssa.gov/policy/docs/progdesc/intl_update/2025-04/2025-04.pdf",source:"SSA International Update",pubDate:"2025-03-20",summary:"South Korea's National Assembly enacted pension reform raising the NPS contribution rate from 9% to 13% by 2033 (0.5pp/year from 2026). Replacement rate for 40-year contributors rises from 41.5% to 43%. Fund depletion delayed from 2050 to at least 2064."},
    {title:"Korea's Elderly Poverty Rate Highest in OECD Despite Pension Reforms",url:"https://www.oecd.org",source:"OECD",pubDate:"2025-05-15",summary:"South Korea's elderly poverty rate remains the highest in the OECD at over 40%, despite the National Pension Service reforms. The Basic Pension program provides only about 300,000 won monthly, insufficient for basic living costs in major cities."},
    {title:"Korea's Population Aging Fastest in the World: 65+ Reaches 20% in 2025",url:"https://kostat.go.kr",source:"Statistics Korea",pubDate:"2025-02-01",summary:"South Korea became a 'super-aged society' with 20.3% of the population aged 65+ in 2025, the fastest aging rate globally. UN projections show the proportion rising to 33.8% by 2040 and 48.6% by 2070, creating unprecedented pension pressures."},
    {title:"Retirement Pension (DC/DB) Market Surpasses 400 Trillion Won",url:"https://www.fsc.go.kr",source:"Financial Supervisory Service",pubDate:"2025-08-10",summary:"Korea's corporate retirement pension market (DC and DB plans) surpassed 400 trillion won in assets. Default option (pre-designated management) system has been introduced to improve returns for workers who don't actively manage their accounts."},
    {title:"Childbirth and Military Service Credits Expanded in NPS Reform",url:"https://www.mohw.go.kr",source:"Ministry of Health and Welfare",pubDate:"2025-03-21",summary:"The NPS reform includes expanded pension credits for childbirth and military service to address Korea's low birthrate. Additional credits aim to partially offset career interruptions, with credits now counting toward both eligibility and benefit calculation."}
  ],
  AU: [
    {title:"Super Guarantee Rate Reaches 12% From July 2025 — Final Target Achieved",url:"https://www.ato.gov.au/tax-rates-and-codes/key-superannuation-rates-and-thresholds/super-guarantee",source:"ATO",pubDate:"2025-07-01",summary:"Australia's Superannuation Guarantee rate reached its legislated target of 12% from July 1, 2025. The rate has gradually increased from 9.5% since 2021. Combined with Payday Super reforms, workers will see super on every pay cycle from July 2026."},
    {title:"Payday Super Reforms: Contributions Required Every Payday from July 2026",url:"https://www.ato.gov.au",source:"ATO",pubDate:"2026-07-01",summary:"Starting July 1, 2026, employers must pay super guarantee contributions on the same day as salary and wages. This aims to close the $5 billion annual unpaid super gap and improve retirement outcomes for millions of Australians."},
    {title:"Australia's Super System Reaches $4.1 Trillion — World's 4th Largest Pension Pool",url:"https://www.apra.gov.au",source:"APRA",pubDate:"2025-09-30",summary:"Australia's superannuation assets reached $4.1 trillion, making it the 4th largest pension pool globally and the largest per capita. APRA's performance test continues to drive consolidation with underperforming funds forced to merge."},
    {title:"Retirement Income Covenant: Funds Required to Offer Comprehensive Retirement Products",url:"https://www.apra.gov.au",source:"APRA",pubDate:"2025-06-15",summary:"Super funds are now required to have a formal retirement income strategy, offering members products that manage longevity risk. This includes lifetime annuities, account-based pensions with death benefits, and guided drawdown solutions."},
    {title:"Downsizer Contributions Expanded: Age Lowered to 55, Cap Increased to $400,000",url:"https://www.ato.gov.au",source:"ATO",pubDate:"2025-07-01",summary:"The downsizer contribution scheme was expanded: eligibility age lowered from 60 to 55, and the maximum contribution increased to $400,000 per person ($800,000 per couple) from the sale of a primary residence held 10+ years."}
  ],
  FR: [
    {title:"Réforme des retraites 2023: l'âge légal passe progressivement à 64 ans, suspension en débat",url:"https://www.france24.com",source:"France 24 / AFP",pubDate:"2025-10-23",summary:"Le gouvernement français a suspendu temporairement l'application de la réforme des retraites de 2023 dans le cadre du budget 2026. L'âge légal de départ devait passer de 62 à 64 ans. Les socialistes exigent l'abrogation complète comme condition de soutien."},
    {title:"Régime universel par points: le projet est relancé dans une version simplifiée",url:"https://www.legifrance.gouv.fr",source:"Gouvernement",pubDate:"2025-06-01",summary:"Le projet de régime universel de retraite par points, mis en pause après la crise des gilets jaunes et le COVID, est relancé dans une version simplifiée. L'objectif est d'harmoniser les 42 régimes existants d'ici 2035."},
    {title:"Plan Épargne Retraite (PER): Plus de 10 millions de titulaires, encours de 100 milliards d'euros",url:"https://www.banque-france.fr",source:"Banque de France",pubDate:"2025-09-15",summary:"Le PER (Plan d'Épargne Retraite), lancé en 2019, a dépassé les 10 millions de titulaires avec 100 milliards d'euros d'encours. Le succès est attribué à la portabilité entre entreprises et aux avantages fiscaux à l'entrée."},
    {title:"Pénibilité au travail: Le Compte Professionnel de Prévention (C2P) élargi à de nouveaux critères",url:"https://www.travail.gouv.fr",source:"Ministère du Travail",pubDate:"2025-03-20",summary:"Le C2P est élargi avec l'ajout de nouveaux facteurs de pénibilité. Les salariés exposés peuvent cumuler des points pour partir plus tôt à la retraite ou financer un temps partiel de fin de carrière."},
    {title:"Mercer 2025: Le système français classé parmi les meilleurs pour l'adéquation des pensions",url:"https://www.mercer.com",source:"Mercer CFA Institute",pubDate:"2025-10-15",summary:"Malgré les controverses sur l'âge de départ, le système français est classé 3e mondial pour l'adéquation des pensions (remplacement du revenu). Le taux de remplacement net reste l'un des plus élevés des pays développés."}
  ],
  SG: [
    {title:"Singapore Becomes First Asian Country to Earn 'A' Grade in Mercer Global Pension Index 2025",url:"https://www.mercer.com",source:"Mercer CFA Institute",pubDate:"2025-10-15",summary:"Singapore made history as the first Asian country to achieve an A-grade in the Mercer Global Pension Index, joining Netherlands, Iceland, Denmark, and Israel with top-tier ratings. The CPF system was praised for its sustainability and integrity."},
    {title:"CPF Retirement Sum Increased to Meet Rising Cost of Living",url:"https://www.cpf.gov.sg",source:"CPF Board",pubDate:"2026-01-01",summary:"The CPF Basic Retirement Sum for 2026 has been adjusted to reflect inflation and rising living costs. Members turning 55 in 2026 need to set aside a higher sum, with the Full and Enhanced Retirement Sums scaling proportionally."},
    {title:"CPF Interest Rates Maintained: Special and Medisave Accounts at 4.08%",url:"https://www.cpf.gov.sg",source:"CPF Board",pubDate:"2025-10-01",summary:"CPF Board announced interest rates for Q4 2025: Ordinary Account at 2.5%, Special and Medisave Accounts at 4.08%, Retirement Account at 4.08%. The extra 1% interest on first $60,000 of combined balances continues."},
    {title:"CPF LIFE Payouts Adjusted: Enhanced Escalating Plan Gains Popularity",url:"https://www.cpf.gov.sg",source:"CPF Board",pubDate:"2025-07-15",summary:"CPF LIFE payouts have been adjusted to reflect updated mortality tables. The Escalating Plan, which increases payouts by 2% annually to offset inflation, is now chosen by over 35% of new members, up from 15% five years ago."}
  ],
  NL: [
    {title:"Netherlands Tops Mercer Global Pension Index 2025 for Second Consecutive Year",url:"https://www.mercer.com",source:"Mercer CFA Institute",pubDate:"2025-10-15",summary:"The Netherlands maintained its #1 position in the 2025 Mercer Global Pension Index with a score of 85.4 (A-grade), praised for strong regulation, mandatory occupational pensions with near-universal coverage, and the new DC-based pension system."},
    {title:"New Dutch Pension System: DC Transition on Track, All Funds Must Comply by 2028",url:"https://www.dnb.nl",source:"De Nederlandsche Bank",pubDate:"2025-09-01",summary:"All Dutch pension funds must transition from defined benefit to the new defined contribution system by January 1, 2028. Over 60% of funds have submitted transition plans. The reform eliminates cross-generational subsidies and gives members individual pension pots."},
    {title:"Netherlands AOW Age Remains at 67: Life Expectancy Linkage Under Review",url:"https://www.svb.nl",source:"SVB",pubDate:"2025-04-01",summary:"The AOW (state pension) age remains at 67 years for 2025-2028, with the life expectancy linkage under political review. Flexible AOW options allowing partial pension drawdown from 65 have been proposed."}
  ],
  DK: [
    {title:"Denmark Ranked #3 in Mercer Global Pension Index 2025, ATP Model Praised",url:"https://www.mercer.com",source:"Mercer CFA Institute",pubDate:"2025-10-15",summary:"Denmark scored 82.3 (A-grade) in the 2025 Mercer index, ranking 3rd globally. The combination of ATP mandatory contributions, near-universal occupational pensions, and the indexation of retirement age to life expectancy was highlighted."},
    {title:"Danish Retirement Age to Hit 69 by 2035 Under Life Expectancy Indexation",url:"https://www.bm.dk",source:"Beskæftigelsesministeriet",pubDate:"2025-06-15",summary:"Denmark's retirement age will reach 69 by 2035 under the automatic indexation mechanism that links the pension age to life expectancy. Early retirement (Arne-pension) is available up to 3 years before the state pension age for those with long working careers."},
    {title:"ATP Returns 8.2% in 2025: Hedging Strategy Pays Off in Volatile Markets",url:"https://www.atp.dk",source:"ATP",pubDate:"2026-02-01",summary:"ATP reported an 8.2% return for 2025, with its unique risk-diversification strategy combining equities, bonds, real estate, and inflation hedging. ATP manages over DKK 800 billion and remains one of Europe's largest pension funds."}
  ],
  CA: [
    {title:"CPP Enhancement Continues: Replacement Rate Path to 33% by 2065",url:"https://www.canada.ca",source:"Government of Canada",pubDate:"2025-06-01",summary:"The Canada Pension Plan enhancement continues its gradual phase-in. The maximum retirement pension now reflects additional contributions, with the replacement rate on track to reach 33% (up from 25%) by 2065. CPPIB assets exceed $650 billion."},
    {title:"OAS Increase: Seniors 75+ Receive 10% Permanent Boost",url:"https://www.canada.ca",source:"Service Canada",pubDate:"2025-07-01",summary:"The permanent 10% increase to Old Age Security for seniors aged 75 and older takes effect, providing additional support to approximately 3.3 million seniors. This is the first permanent OAS increase since the GIS top-up was enhanced in 2020."},
    {title:"Retirement Income Adequacy: 25% of Canadians Not on Track, CFIB Research Shows",url:"https://www.cfib-fcei.ca",source:"CFIB",pubDate:"2025-09-10",summary:"Research from the Canadian Federation of Independent Business indicates about 25% of working Canadians are not saving enough for retirement. The gap is most pronounced among renters, those without workplace pensions, and self-employed individuals."}
  ],
  BR: [
    {title:"Reforma da Previdência 2019 completa 6 anos: rombo fiscal ainda preocupa",url:"https://www.gov.br/previdencia",source:"Ministério da Previdência",pubDate:"2025-11-12",summary:"A Reforma da Previdência de 2019 completa 6 anos com resultados mistos. A idade mínima (65/62) reduziu novas aposentadorias precoces, mas o déficit da Previdência ainda supera R$ 300 bilhões anuais, pressionado por RPPS estaduais e municipais."},
    {title:"Mercado de Previdência Privada ultrapassa R$ 1,5 trilhão em ativos",url:"https://www.fenaprevi.org.br",source:"FenaPrevi",pubDate:"2025-08-10",summary:"O mercado de previdência privada brasileiro ultrapassou R$ 1,5 trilhão em ativos sob gestão, com planos PGBL e VGBL liderando. Juros altos impulsionaram produtos de renda fixa, mas diversificação para renda variável cresce."},
    {title:"BPC: Governo aperta regras e economiza R$ 10 bilhões, mas gera polêmica",url:"https://www.gov.br/cidadania",source:"Ministério do Desenvolvimento Social",pubDate:"2025-04-15",summary:"O endurecimento das regras do BPC (Benefício de Prestação Continuada) gerou economia de R$ 10 bilhões em 2025, mas enfrenta críticas de entidades sociais. O benefício de um salário mínimo para idosos 65+ em situação de pobreza atende 5 milhões de pessoas."}
  ],
  IN: [
    {title:"National Pension System (NPS) Assets Cross ₹13 Lakh Crore Milestone",url:"https://www.pfrda.org.in",source:"PFRDA",pubDate:"2025-09-30",summary:"India's National Pension System crossed ₹13 lakh crore in assets under management, driven by strong equity market performance and growing subscriber base. The default lifecycle fund option has delivered CAGR of 12%+ since inception."},
    {title:"Atal Pension Yojana (APY) Enrollments Cross 7 Crore, Government Guarantee Extended",url:"https://www.pfrda.org.in",source:"PFRDA",pubDate:"2025-08-15",summary:"APY enrollments surpassed 7 crore, making it one of the world's largest micro-pension schemes. The government guarantee of minimum pension (₹1,000-5,000/month) has been extended, and digital enrollment through UPI-linked platforms is being piloted."},
    {title:"EPFO Coverage to Include Gig Workers Under New Social Security Code Implementation",url:"https://labour.gov.in",source:"Ministry of Labour",pubDate:"2025-05-01",summary:"The Social Security Code 2020 is being implemented in phases, with gig and platform workers now eligible for EPFO benefits including provident fund, pension, and insurance. This represents the first formal social security coverage for India's estimated 15 million gig workers."},
    {title:"NPS Tax Benefits Enhanced: Corporate NPS Contribution Deduction Increased to 14%",url:"https://www.incometax.gov.in",source:"Income Tax Department",pubDate:"2025-02-01",summary:"In Budget 2025, the deduction limit for employer NPS contributions under Section 80CCD(2) was increased from 10% to 14% of salary for all employees (previously only for central government). Combined with Section 80CCD(1B) additional ₹50,000, total tax benefit can exceed ₹2 lakh."}
  ]
};

// Fallback news for countries without pre-populated data
const NEWS_FALLBACK_CONFIG = {
  en: { query: 'pension retirement reform', sourceName: 'Google News' },
  zh: { query: '养老金 退休', sourceName: 'Google 新闻' },
  es: { query: 'pension jubilacion reforma', sourceName: 'Google News' },
  fr: { query: 'retraite pension reforme', sourceName: 'Google News' },
  de: { query: 'Rente Rentenreform', sourceName: 'Google News' },
  ja: { query: '年金 退職', sourceName: 'Google ニュース' },
  ko: { query: '연금 은퇴', sourceName: 'Google 뉴스' },
  ar: { query: 'تقاعد معاشات', sourceName: 'Google News' },
  pt: { query: 'aposentadoria previdencia', sourceName: 'Google News' },
  it: { query: 'pensione previdenza', sourceName: 'Google News' },
  ru: { query: 'пенсия реформа', sourceName: 'Google News' },
  hi: { query: 'पेंशन सेवानिवृत्ति', sourceName: 'Google News' },
  bn: { query: 'পেনশন অবসর', sourceName: 'Google News' }
};

// Function to get news for a country
function getNewsForCountry(countryCode, lang) {
  // Pre-populated news
  if (NEWS[countryCode] && NEWS[countryCode].length > 0) {
    return NEWS[countryCode];
  }

  // Generate fallback link for other countries
  const country = COUNTRIES.find(c => c.code === countryCode);
  if (!country) return [];

  const cfg = NEWS_FALLBACK_CONFIG[lang] || NEWS_FALLBACK_CONFIG.en;
  const searchName = (lang === 'zh') ? (country.name_local || country.name_en) : country.name_en;

  return [{
    title: (lang === 'zh') ?
      `查看 ${searchName} 养老金相关新闻` :
      `View ${searchName} pension & retirement news`,
    url: `https://news.google.com/search?q=${encodeURIComponent(country.name_en + ' ' + cfg.query)}&hl=${lang}`,
    source: cfg.sourceName,
    pubDate: new Date().toISOString().split('T')[0],
    summary: (lang === 'zh') ?
      `点击访问 Google 新闻查看 ${searchName} 最新的养老金和退休政策动态。` :
      `Click to view the latest pension and retirement news for ${searchName} on Google News.`
  }];
}
