# Portfolio polish — executable implementation plan

Status: ready for implementation. This document is the handoff; the redesign has not been implemented.

## Objective and scope

Rework the existing React portfolio into a concise, credible backend-engineering portfolio. Optimize for a recruiter or engineering lead understanding Amr's work quickly. Keep the existing React 16 / react-scripts / SCSS stack. Implement locally, validate, and leave a running preview. Do not deploy, push, or upgrade dependencies as part of this task.

Read any applicable AGENTS.md first. Preserve the existing uncommitted inDrive entry, its six achievements, and `src/assets/images/indriveLogo.png` (the user-provided 600×600 image). Do not reset the worktree or replace it with a template. Do not use Sites or migrate hosting. No new packages, stock illustrations, invented achievements, or external image dependencies are needed.

## Decisions already made

- Page order: Introduction → Experience → Technical expertise → Writing → Contact.
- Keep education as one compact line after the employment entries, not a standalone major section.
- Employment is the primary evidence. Do not add a separate Selected Work section or invent case studies.
- Remove large company banners, blurred overlays, oversized circular logos, the opening splash, and decorative Lottie illustrations from the rendered page.
- Keep dark/light mode, existing blog destinations, contact details, and GitHub/LinkedIn links.
- Remove the broad Services sales pitch and GitHub project feed from the main page. GitHub remains a direct profile link.
- Use a vertical experience list, with the latest role most prominent.
- The inDrive logo stays local and lime green. Its previous yellow banner override is obsolete once banners are removed.

## Unresolved facts: use these defaults, do not guess

1. inDrive title: retain `Software Engineer` as the current provisional label; do not promote it to Senior or Staff. Dates are confirmed: `Jul 2025 – Present`.
2. Alraedah currently says `Jun 2024 – Dec 2023`. Do not reverse or invent dates. Keep the company and achievements in their current order but omit its visible date until corrected. Record the original value and the outstanding question in the completion notes.
3. `public/resume.pdf` was empty at review time. Check again before implementation. If still absent/empty, use the resume-page fallback specified below. Do not fabricate a PDF or edit the user's Google Drive document.
4. Do not announce current job-seeking or consulting availability; neither is confirmed.

## 1. Content changes — src/portfolio.js

Keep portfolio facts in this data file; do not duplicate them in JSX.

### Hero: use this exact copy

Eyebrow: `Amr Hassan`

Headline: `Backend engineer building reliable distributed systems.`

Description: `At inDrive, I owned the backend integration of WeRide’s autonomous fleet through a Saudi field pilot. I build services, integrations, and infrastructure with Go, Kafka, gRPC, and Kubernetes.`

Actions: `View experience` → `/#/experience`; `Résumé` → `/#/resume`.

Place GitHub and LinkedIn as quieter text links. Remove the waving emoji, welcome paragraph, automatic years-of-experience count, and hero illustration.

### Experience content

Keep all seven roles and supplied dates except the invalid Alraedah range. Keep the six inDrive bullets verbatim. Show its first four initially; place the last two under native `<details>` with summary `More at inDrive`.

For older roles, show the following two bullets initially (rewrite as below); preserve their other substantive, nonduplicated achievements under `More at [company]`. Avoid repeating the same achievement in the expanded section.

| Company | Visible bullet 1 | Visible bullet 2 |
| --- | --- | --- |
| BitBang | Led the backend squad for Amplifidor, managing execution, priorities, and scalability. | Transitioned core systems to microservices, enabling 40% faster feature deployment. |
| Alraedah | Designed and implemented backend solutions with a team of four engineers. | Migrated integrations to a configuration-based approach, increasing development speed by 20% and improving maintainability. |
| SWVL | Led a team of seven engineers and established code-review and quality standards. | Improved B2B Kubernetes operations with monitoring dashboards, playbooks, and deployment scripts. |
| Udacity | Led full-stack JavaScript sessions with presentations, code examples, and feedback on student work. | Supported more than 50 students through feedback and class discussions. |
| Magalix | Reduced time-series data response time from 600 ms to 100 ms and expanded write throughput. | Identified an ingestion bottleneck and implemented circuit breakers, increasing ingestion rate by 10×. |
| Teknowl | Built a HAL package that simplified rendering and relationships between models. | Optimized MySQL queries, reducing executed queries on multiple pages by 27%. |

Remove the ambiguous `~0.001x` claim from SWVL's expanded content: say `Optimized TaaS data fetching to reduce execution time and BigQuery costs.` Remove `500% time savings` from Teknowl, without substituting a new number. Correct the Magalix traffic wording to `Reduced per-cluster tracking requests from 60 to 2 per hour.` These edits clarify existing claims; do not add new metrics.

Education line: `BSc Computer Science · Helwan University · 2015–2019`.

### Technical expertise

Replace year-rated chips and generic proficiency paragraphs with four unrated groups:

- Languages: Go, Node.js, PHP, TypeScript.
- APIs and messaging: gRPC, REST, Kafka.
- Data: PostgreSQL, MongoDB, Redis, BigQuery.
- Infrastructure and reliability: Kubernetes, Docker, AWS, GCP, CI/CD, monitoring and alerting.

Do not retain labels such as beginner/pro or self-rated percentages. Heading: `Technical expertise`. No filler subtitle required.

### Writing and contact

Writing heading: `Writing`. Subtitle: `Notes on backend systems, infrastructure, and engineering trade-offs.` Keep the three existing article URLs exactly; improve labels:

- `When to go serverless` — `Trade-offs to consider before choosing serverless infrastructure.`
- `Kubernetes namespaces you should not mess with` — `System namespaces and why they matter to a working cluster.`
- `SQS vs Kafka` — `Different messaging models and where each fits.`

Use `More articles` for the existing blog link.

Contact heading: `Get in touch`. Body: `Want to discuss backend systems or a project? Get in touch.` Keep the existing email, GitHub, LinkedIn, and optional existing meeting link with the label `Book a conversation`. Remove the lengthy booking pitch and illustration.

## 2. Visual specification

- Shared container: max-width 1040px, centered; 24px side padding on desktop, 20px on mobile.
- Font: system sans-serif stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`). Remove decorative signature styling from the header name. Do not load a new remote font.
- Hero headline: clamp(2rem, 5vw, 3.5rem), line-height 1.12, max-width 20ch. Body: 18px, line-height 1.65, max-width 65ch.
- Section headings: 28–32px; body/list text: 16–18px, line-height 1.6. Use one h1 per page; h2 sections; h3 companies.
- Section spacing: 72px desktop, 48px mobile. Avoid full-screen empty hero space.
- Light: background #ffffff, text #17212b, secondary text #475569, border #dbe2e8, accent #5b21b6.
- Dark: background #111827, text #f1f5f9, secondary text #cbd5e1, border #374151, accent #c4b5fd. Button text/background must remain readable in both modes.
- Experience rows: company logo 48px square, object-fit contain, subtle radius; company/role/date left aligned; quiet separators; no large shadows, colored banners, decorative timelines, or fixed heights.
- Below 768px, use a single column and let dates sit beneath titles. Keep everything left aligned. Expertise can use two columns above 768px.
- Native disclosure summaries must be keyboard accessible and clearly clickable. Buttons/links need visible focus styles and comfortable touch targets.
- Content appears immediately. Respect `prefers-reduced-motion` for any remaining scroll/hover transitions.

## 3. Implementation order and file map

### A. Page shell and navigation

Files: `src/containers/Main.js`, `Main.scss`, `src/App.js`, `src/components/header/Header.js`, `Header.scss`, `src/_globalColor.scss`, `src/App.scss`, `src/index.css` if present.

- Render Header, Greeting, WorkExperience (including education line), Skills, Blogs, Contact, and the existing scroll-to-top control. Render Contact directly rather than Profile so contact does not depend on `/profile.json`.
- Remove splash state, timers, retry loops, and availability auto-clicking. Merely setting `splashScreen.enabled = false` is insufficient: the current scroll effect depends on splash state becoming false.
- Keep HashRouter. Use `useLocation().pathname` to react to section route changes; map `/experience`, `/skills`, `/blogs`, `/contact` to existing section IDs and scroll after render. Guard missing targets and set scroll-margin-top for the header. Header links should use router navigation, not duplicate imperative scroll handlers. Repeated clicks on the current section must still scroll correctly.
- Header labels: Experience, Expertise, Writing, Contact; preserve `/skills` and `/blogs` URLs. Mobile menu must have an accessible label, close after selection, and work by keyboard.
- Redirect old `/services` and `/availability` routes to `/contact`, `/opensource` to `/contact` (GitHub remains available there), and unknown paths to `/`. No null-element exceptions or blank routes.
- Preserve theme localStorage behavior. Give the theme toggle an accessible name; do not wrap it in an empty anchor. Reset home-page document title after leaving Resume.

### B. Hero, experience, expertise, writing, contact

Files: corresponding JS/SCSS under `containers/greeting`, `containers/workExperience`, `components/experienceCard`, `containers/skills`, `components/softwareSkills`, `containers/blogs`, `components/blogCard`, and `containers/contact`.

- Apply the exact content and visual specifications above.
- ExperienceCard should use a semantic article with a small header, visible bullets, and optional details. Add an explicit visible-bullet count or separate data arrays; do not infer priority from text length.
- Remove ColorThief imports/state/image sampling and bannerColor plumbing from the card and its parent. Keep an initials fallback for missing/failed logos with actual image error handling.
- Replace `.experience-cards-div div` with selectors scoped to the row/container. Do not apply layout rules to every descendant div.
- Remove active-page Lottie and reveal wrappers so page content is neither delayed nor concealed. Do not uninstall shared packages in this task.
- Remove global `.subTitle !important` overrides that defeat theme contrast; scope typography rules appropriately.

### C. Resume usability

Files: `src/pages/resume/Resume.js`, `Resume.scss`, relevant portfolio config.

- If a valid nonempty PDF exists, retain the viewer and add a normal `Download PDF` link plus a home link.
- If the file is absent/empty, show `Résumé` with `For a copy of my current résumé, email me.` and a mailto link using the existing email, plus `View experience`. Do not show an empty iframe or dead download link.
- Make PDF availability an explicit config flag based on the inspected asset; do not add repeated network polling. On later replacement, document how to enable it.
- Scope iframe styles to the resume container; current global iframe rules can affect other embeds.

### D. Metadata and template cleanup

Files: `src/portfolio.js`, `public/index.html`, imports consuming removed exports.

- Title: `Amr Hassan | Backend Engineer`.
- Description (also Open Graph/Twitter): `Backend engineer at inDrive, working on distributed systems, platform integrations, and production reliability with Go, Kafka, gRPC, and Kubernetes.`
- Remove inconsistent experience-year counts and obsolete hardcoded font preload URLs if no longer used. Keep existing analytics IDs and domain metadata intact.
- Remove disabled fictional achievements, lorem-ipsum project records, other people's talks/podcasts, proficiency bars, splash config, and generic services content. Search for every importing consumer before removing exports; update or remove unused components as needed so imports remain valid. Do not delete legitimate employment facts or blog links.

## 4. Verification and preview

Run from the repository root:

```sh
NODE_OPTIONS=--openssl-legacy-provider node_modules/.bin/react-scripts build
CI=true node_modules/.bin/react-scripts test --watchAll=false --runInBand
git diff --check
```

Do not use `npm start` or `npm run build` for this local check: both invoke `fetch.js`, which currently starts an authenticated resume download and can truncate the PDF before succeeding. Use react-scripts directly. Fixing that download pipeline is a separate task, not a dependency for this redesign.

Serve `build` with `python3 -m http.server 8097 --bind 127.0.0.1 --directory build`; reuse a verified existing server on that port. Browser automation was available through `/Users/amrhassan/Desktop/codes/mithaqq/node_modules/playwright` during the review; check availability or use another installed browser tool. Do not add Playwright to this project's dependencies just to take screenshots.

Inspect at 390×844 and 1440×900 in both light and dark themes. Also check 320px width for overflow. Capture the hero and first experience entry in each main viewport.

Acceptance checklist:

- [ ] Hero and navigation appear immediately, without a splash or scroll-reveal delay.
- [ ] Page order, wording, and navigation match this plan.
- [ ] inDrive is first, dated Jul 2025–Present, with the supplied local logo; all six achievements remain accessible.
- [ ] Four inDrive bullets and two per older role are initially visible; keyboard disclosure works.
- [ ] No invalid Alraedah date, invented title, unsubstantiated new metric, or skill-year ratings appear.
- [ ] Direct loads, refresh, same-section navigation, browser back/forward, and mobile selection work for every section route.
- [ ] Legacy routes redirect safely; resume shows a usable PDF or the specified contact fallback.
- [ ] Theme persists; headings, links, summaries, menu, and toggle are keyboard accessible and readable.
- [ ] No horizontal overflow, missing images, clipped text, blank sections, or browser exceptions.
- [ ] Contact works without fetching a GitHub profile; no logo is loaded from a third-party host.
- [ ] Build, existing tests, and diff whitespace check pass. Add focused tests only if needed for new route/fallback logic, not cosmetic implementation details.

## 5. Handoff after implementation

Report changed files, verification results, screenshot paths, and the local preview URL. List the remaining factual inputs (exact inDrive title, correct Alraedah dates, updated PDF) without blocking the otherwise complete local redesign. Do not claim the website is deployed. Leave unrelated user changes intact.

Suggested executor prompt:

> Implement docs/portfolio-polish-plan.md completely in this repository. Follow its exact copy, defaults, file guidance, and acceptance checklist. Preserve existing user changes. Verify the responsive light/dark result and leave a local preview running. Do not deploy or push.
