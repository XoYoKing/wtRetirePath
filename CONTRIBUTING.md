<p align="center">
  <a href="#简体中文">简体中文</a> · <a href="#english">English</a>
</p>

---

## 简体中文

首先，感谢你考虑为 **RetirePath** 做贡献！这是一个面向全球的公益退休规划工具，每一条数据、每一句翻译都能帮助更多人更好地规划退休生活。

### 🐛 报告问题（Issue）

- 在仓库 **Issues** 中搜索是否已有相同问题。
- 新建 Issue 时请尽量提供：复现步骤、所在国家/语言、浏览器与系统、截图或错误信息。
- 数据类问题请注明来源（政府官网 / OECD / SSA 等链接），便于核实。

### 🔀 提交改动（Pull Request）

1. **Fork** 本仓库并克隆到本地。
2. 基于 `main` 创建分支：`git checkout -b fix/country-cn-pension` 或 `feat/add-ar-translation`。
3. 本地用 `python3 -m http.server` 预览，确认改动正常。
4. 提交信息请用**清晰、自解释**的描述（中英文均可）。
5. 提交 PR，并在描述中说明改动内容与依据。

> 提交前请确保：代码保持 ES5 风格、无构建步骤、不引入运行时依赖；新增数据需附来源。

### ➕ 如何新增一个国家

编辑 `js/countries.js`，在 `COUNTRIES` 数组中添加对象，字段说明：

| 字段 | 含义 | 示例 |
| --- | --- | --- |
| `code` | ISO 3166-1 alpha-2 代码 | `'CN'` |
| `flag` | 国旗 emoji | `'🇨🇳'` |
| `name_en` / `name_local` | 英文名 / 本地名 | `'China'` / `'中国'` |
| `lang` | 默认 UI 语言 | `'zh'` |
| `currency` | 货币符号 | `'¥'` |
| `retire_m` / `retire_f` | 男女退休年龄 | `63` / `58` |
| `repl_rate` | 替代率（%） | `45` |
| `life_exp` | 预期寿命 | `80` |
| `inflation` | 年化通胀（%） | `2.5` |
| `pension_sys` / `*_zh` | 制度描述（多语言） | 见现有条目 |
| `strength` / `weakness` / `tax` / `retire_trend` | 四维解读（建议含 `*_zh`） | — |

同时，若该国使用非英语 UI，请确认 `js/i18n.js` 中 `COUNTRY_LANG` 已映射；如需新增语言，见下。

### 🌐 如何新增一门语言

1. 在 `js/i18n.js` 的 `I18N` 对象中新增一个以语言代码为键的对象（如 `tr: { ... }`），翻译所有已存在的键。
2. 在 `COUNTRY_LANG` 中将对应国家映射到该语言代码。
3. （可选）为使用该语言的国家补充 `countries.js` 中的 `*_xx` 多语言字段。

### 📰 新增精选资讯

编辑 `js/news.js` 的 `NEWS` 对象，按国家代码添加条目：
```js
CN: [
  { title: '...', url: 'https://...', source: '来源', pubDate: '2026-01-01', summary: '...' }
]
```
请确保链接指向权威来源（政府、监管机构、主流媒体）。

### 📜 行为准则

参与本社区即表示你同意遵守 **[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)**。

---

## English

Thank you for considering contributing to **RetirePath**! This is a public-interest retirement planning tool for the whole world — every data point and translation helps more people plan their future.

### 🐛 Reporting Issues

- Search existing **Issues** before opening a new one.
- Include repro steps, your country/language, browser & OS, and screenshots or error text.
- For data issues, cite a source (government site / OECD / SSA link) so it can be verified.

### 🔀 Pull Requests

1. **Fork** and clone the repo.
2. Branch off `main`: `git checkout -b fix/country-cn-pension` or `feat/add-ar-translation`.
3. Preview locally with `python3 -m http.server` and confirm it works.
4. Write a clear, self-explanatory commit message (Chinese or English is fine).
5. Open a PR describing the change and its basis.

> Before submitting: keep code ES5-style, no build step, no runtime dependencies; cite sources for new data.

### ➕ Adding a Country

Edit `js/countries.js` and add an object to the `COUNTRIES` array. Key fields:

| Field | Meaning | Example |
| --- | --- | --- |
| `code` | ISO 3166-1 alpha-2 | `'CN'` |
| `flag` | Flag emoji | `'🇨🇳'` |
| `name_en` / `name_local` | English / local name | `'China'` / `'中国'` |
| `lang` | Default UI language | `'zh'` |
| `currency` | Currency symbol | `'¥'` |
| `retire_m` / `retire_f` | Retirement age (M/F) | `63` / `58` |
| `repl_rate` | Replacement rate (%) | `45` |
| `life_exp` | Life expectancy | `80` |
| `inflation` | Annual inflation (%) | `2.5` |
| `pension_sys` / `*_zh` | System description (multilingual) | see existing entries |
| `strength` / `weakness` / `tax` / `retire_trend` | Four-dimension notes (include `*_zh` if possible) | — |

Also ensure `COUNTRY_LANG` in `js/i18n.js` maps the country to its UI language; add a language if needed (see below).

### 🌐 Adding a Language

1. In `js/i18n.js`, add an object keyed by the language code (e.g. `tr: { ... }`) under `I18N`, translating every existing key.
2. Map the relevant countries to that language code in `COUNTRY_LANG`.
3. (Optional) Add `*_xx` multilingual fields for those countries in `countries.js`.

### 📰 Adding Curated News

Edit the `NEWS` object in `js/news.js`, keyed by country code:
```js
CN: [
  { title: '...', url: 'https://...', source: 'Source', pubDate: '2026-01-01', summary: '...' }
]
```
Link only to authoritative sources (government, regulators, reputable media).

### 📜 Code of Conduct

By participating, you agree to abide by the **[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)**.
