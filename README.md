<p align="center">
  <img src="https://img.shields.io/badge/type-static%20site-238636?style=flat-square" alt="Static Site">
  <img src="https://img.shields.io/badge/license-MIT-58a6ff?style=flat-square" alt="License: MIT">
  <img src="https://img.shields.io/badge/countries-83%2B-58a6ff?style=flat-square" alt="83+ Countries">
  <img src="https://img.shields.io/badge/languages-13-58a6ff?style=flat-square" alt="13 Languages">
  <img src="https://img.shields.io/badge/build-no%20dependencies-238636?style=flat-square" alt="No Build Step">
</p>

<h1 align="center">RetirePath · 通往安稳退休之路</h1>

<p align="center">
  <b>Free, open-source retirement planning tool for the whole world.</b><br>
  Personalized retirement projections, pension-system explainers, and news — tailored to <b>83 countries</b> and <b>13 languages</b>.
</p>

<p align="center">
  <a href="#简体中文">简体中文</a> · <a href="#english">English</a>
</p>

<p align="center">
  <a href="https://wtretirepath.pages.dev"><b>🌐 Cloudflare Pages 演示</b></a> · <a href="https://xoyoking.github.io/wtRetirePath/"><b>🐙 GitHub Pages 演示</b></a>
</p>

---

## 简体中文

### 📖 项目简介

**RetirePath** 是一个完全免费、开源的退休规划工具。它根据访问者所在国家/地区的养老金制度，提供量身定制的退休储蓄测算、各国养老金体系解读与最新政策资讯。项目是**纯静态网站**（HTML + CSS + 原生 JavaScript），**无需任何构建步骤、不依赖第三方框架或运行时**，打开即用，也极易部署到任意静态托管平台。

> ⚠️ **免责声明**：本工具仅用于教育与参考目的，所有计算结果均为基于公开假设的估算，**不构成任何财务、投资或税务建议**。

### ✨ 功能特性

- 🌍 **全球覆盖**：内置 **83 个国家/地区**的养老金体系数据（退休年龄、替代率、预期寿命、通胀、制度描述等）。
- 🗣️ **多语言界面**：完整支持 **13 种 UI 语言**（中、英、西、法、德、日、韩、阿、葡、意、俄、印地、孟加拉），自动按浏览器语言切换。
- 📍 **智能国家识别**：依据浏览器语言与系统时区自动推断用户所在国家，也可手动切换。
- 🧮 **退休计算器**：输入当前年龄、储蓄、收支与配偶情况，估算距离退休年数、所需总储蓄、储蓄缺口与退休后月收入。
- 📚 **养老金体系解读**：每个国家提供「制度运作 / 优势 / 劣势 / 税务处理 / 改革趋势」五维详解。
- 📰 **退休资讯**：14 个重点国家内置精选新闻；其余国家自动回退到 Google News 检索。
- 🌗 **深色主题**：采用 GitHub 风格深色 UI，移动端响应式布局。

### 🛠 技术栈

| 层面 | 技术 |
| --- | --- |
| 结构 | 原生 HTML5 |
| 样式 | 原生 CSS3（响应式、深色主题） |
| 逻辑 | 原生 JavaScript（ES5 兼容，无框架、无打包） |
| 数据 | 内联 JSON（`js/countries.js`、`js/news.js`、`js/i18n.js`） |
| 部署 | 任意静态托管（GitHub Pages / Netlify / Vercel / Nginx 等） |

> 无 `package.json`、无依赖安装、无构建步骤——克隆即可运行。

### 🚀 本地运行

无需安装任何依赖，任选一种方式：

**方式一：直接打开**
双击 `index.html` 用浏览器打开即可。

**方式二：本地静态服务器**（推荐，避免个别浏览器对 `file://` 的限制）
```bash
# Python 3
python3 -m http.server 8080

# 或 Node
npx serve .
```
然后访问 <http://localhost:8080>。

### 🌐 在线演示

本项目已部署在以下两个静态托管平台，可直接访问体验：

- **Cloudflare Pages**：<https://wtretirepath.pages.dev>
- **GitHub Pages**：<https://xoyoking.github.io/wtRetirePath/>

### 🌐 部署到 GitHub Pages

1. 在仓库 **Settings → Pages** 中，将 Source 设为 **Deploy from a branch**。
2. 选择分支 **`main`**，目录 **`/ (root)`**，保存。
3. 数分钟后访问 `https://<你的用户名>.github.io/wtRetirePath/`。

> 项目无需任何构建，根目录即站点根，可直接发布。也可使用仓库内置的 `.github/workflows/pages.yml`（Source 选 **GitHub Actions**）自动部署。

### 📁 项目结构

```
wtRetirePath/
├── index.html          # 页面骨架（首页 / 计算器 / 养老金体系 / 资讯）
├── css/
│   └── style.css       # 深色主题、响应式样式
├── js/
│   ├── app.js          # 主逻辑：国家识别、路由、计算器、渲染
│   ├── countries.js    # 83 国养老金数据（含多语言字段）
│   ├── i18n.js         # 13 种语言的 UI 文案 + 国家→语言映射
│   └── news.js         # 分国别退休资讯 + Google News 回退配置
├── LICENSE             # MIT 许可证
├── CONTRIBUTING.md     # 贡献指南
├── CODE_OF_CONDUCT.md  # 行为准则
└── README.md           # 本文件
```

### 📊 数据来源与估算假设

- **养老金数据**：综合自各国政府、OECD、美国社保署（SSA）及国际养老金数据库，更新于 2025–2026 年。
- **计算器假设**：
  - 名义年化收益 **5%**，通胀 **3%**（实际收益约 2%）；
  - 退休年龄、替代率、预期寿命取自各国数据；
  - 所需储蓄 = 目标退休月收入 ×（预期寿命 − 退休年龄）× 12，并按通胀折现到退休时点。
- **新闻**：精选资讯来自各国政府官网、监管机构与权威媒体；未覆盖国家使用 Google News 关键词检索。
- 数据会随政策变化而过时，欢迎通过 PR 修正或补充。

### 🤝 如何贡献

欢迎 Issue、PR 与新数据！详见 **[CONTRIBUTING.md](./CONTRIBUTING.md)**。常见贡献方向：
- 补充或修正某国的养老金数据；
- 新增一门 UI 翻译语言；
- 为更多国家添加精选资讯；
- 改进计算器模型或界面。

### 📄 许可证

本项目基于 **[MIT License](./LICENSE)** 开源。

---

## English

### 📖 Overview

**RetirePath** is a free, open-source retirement planning tool. It delivers personalized retirement projections, per-country pension-system explainers, and policy news — adapted to the visitor's own country. It is a **pure static site** (HTML + CSS + vanilla JavaScript) with **no build step and no runtime dependencies**, so it runs anywhere and deploys to any static host in seconds.

> ⚠️ **Disclaimer**: This tool is for education and reference only. All projections are estimates based on public assumptions and **do not constitute financial, investment, or tax advice**.

### ✨ Features

- 🌍 **Global coverage**: pension data for **83 countries/regions** (retirement age, replacement rate, life expectancy, inflation, system description, and more).
- 🗣️ **Multilingual UI**: full support for **13 interface languages** (English, 中文, Español, Français, Deutsch, 日本語, 한국어, العربية, Português, Italiano, Русский, हिन्दी, বাংলা), auto-selected by browser language.
- 📍 **Smart country detection**: infers the user's country from browser locale and system timezone, with manual override.
- 🧮 **Retirement calculator**: enter age, savings, income/expense, and spouse details to estimate years-to-retirement, total savings needed, savings gap, and projected monthly retirement income.
- 📚 **Pension explainers**: five dimensions per country — How It Works / Strengths / Weaknesses / Tax Treatment / Reform Trends.
- 📰 **Retirement news**: curated news for 14 focus countries; all others fall back to a Google News search.
- 🌗 **Dark theme**: GitHub-inspired dark UI, fully responsive.

### 🛠 Tech Stack

| Layer | Technology |
| --- | --- |
| Markup | Vanilla HTML5 |
| Styling | Vanilla CSS3 (responsive, dark theme) |
| Logic | Vanilla JavaScript (ES5-compatible, no framework, no bundler) |
| Data | Inline JSON (`js/countries.js`, `js/news.js`, `js/i18n.js`) |
| Hosting | Any static host (GitHub Pages / Netlify / Vercel / Nginx) |

> No `package.json`, no dependency install, no build — clone and run.

### 🚀 Run Locally

No dependencies required. Either:
- **Open directly**: double-click `index.html`.
- **Local server** (recommended):
  ```bash
  python3 -m http.server 8080
  # or
  npx serve .
  ```
  Then open <http://localhost:8080>.

### 🌐 Live Demo

The project is already deployed on two static hosts — try it live:

- **Cloudflare Pages**: <https://wtretirepath.pages.dev>
- **GitHub Pages**: <https://xoyoking.github.io/wtRetirePath/>

### 🌐 Deploy to GitHub Pages

1. In repo **Settings → Pages**, set Source to **Deploy from a branch**.
2. Choose branch **`main`**, folder **`/ (root)`**, and save.
3. Visit `https://<your-username>.github.io/wtRetirePath/` after a few minutes.

> No build needed — the repository root is the site root. You can also use the built-in `.github/workflows/pages.yml` (set Source to **GitHub Actions**) for automated deploys.

### 📁 Project Structure

```
wtRetirePath/
├── index.html          # Page skeleton (Home / Calculator / Pension Info / News)
├── css/
│   └── style.css       # Dark theme, responsive styles
├── js/
│   ├── app.js          # Core logic: country detection, routing, calculator, rendering
│   ├── countries.js    # Pension data for 83 countries (with multilingual fields)
│   ├── i18n.js         # UI strings for 13 languages + country→language map
│   └── news.js         # Per-country retirement news + Google News fallback config
├── LICENSE             # MIT License
├── CONTRIBUTING.md     # Contribution guide
├── CODE_OF_CONDUCT.md  # Code of conduct
└── README.md           # This file
```

### 📊 Data Sources & Assumptions

- **Pension data**: compiled from government sources, the OECD, the U.S. Social Security Administration (SSA), and international pension databases, updated 2025–2026.
- **Calculator assumptions**: 5% nominal annual return, 3% inflation (~2% real); retirement age, replacement rate, and life expectancy come from country data; required savings = target monthly retirement income × (life expectancy − retirement age) × 12, discounted to the retirement date by inflation.
- **News**: curated items from government, regulator, and reputable media sites; uncovered countries use a Google News keyword search.
- Data goes stale as policies change — PRs to fix or extend it are very welcome.

### 🤝 Contributing

Issues, PRs, and new data are welcome! See **[CONTRIBUTING.md](./CONTRIBUTING.md)**. Common contributions:
- Add or correct a country's pension data;
- Add a new UI translation language;
- Add curated news for more countries;
- Improve the calculator model or UI.

### 📄 License

Released under the **[MIT License](./LICENSE)**.
