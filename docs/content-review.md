# Portfolio content review — 22 October 2026

## Changes implemented

- Hero leads with backend services, integrations, performance, and reliability, followed by the inDrive/WeRide delivery example.
- Experience and résumé remain prominent; a contact action gives prospective clients and recruiters a direct next step.
- Contact copy explicitly welcomes project and engineering-role inquiries without claiming immediate availability.
- All six inDrive achievements remain available. Longer bullets were edited for clarity, and internal terminology was expanded where useful.
- Technical expertise now explains the work behind the tool list. Node.js is grouped under “Languages and runtimes.”
- Removed undefined “30% reliability” and “3× search capabilities” claims, retaining the concrete work behind them. Softened the unqualified claim that FAQ documents improved graduation rates.
- Preserved existing measurable outcomes, including 600 ms to 100 ms, 10× ingestion, 27% fewer queries, and 150+ unit tests. These are user-provided claims, not independently audited measurements.

## Reconciliation with the local résumé PDF

The PDF was read using PDFKit on 22 October 2026. Website dates and title now follow that supplied document:

- inDrive: Senior Software Engineer, July 2025–present.
- Alraedah: June–December 2023.
- BitBang: August 2024–March 2025.
- SWVL: January–December 2022.
- BitBang's 40% deployment claim was replaced with the PDF's federated analytics/SSO service achievement. Alraedah's 20% claim now describes integration speed, matching the PDF rather than general development speed.

Remaining factual questions: the PDF names the 2019–2021 employer Weaveworks, while the existing website and original experience refer to Magalix. The website retains Magalix pending confirmation. The PDF gives September 2019 for graduation, while the earlier website used April; the website keeps year-only education dates. Udacity is retained from the user's existing website even though the condensed PDF omits it. No changes were made to the PDF or its Google Drive source.

## Related visitor-journey fixes and checks

Fixed home navigation retaining the previous scroll position, a stale scroll callback throwing after navigation to Resume, keyboard focus entering the collapsed mobile menu, and the contact email overflowing at 320px.

Production compilation, the existing smoke test, and diff whitespace validation pass. Browser checks verified return-to-top navigation, no resume scroll-handler exceptions, mobile navigation/focus, disclosure of the remaining inDrive achievements, one H1, light/dark rendering, and no horizontal overflow at the checked narrow widths. This is local validation; nothing was deployed.

## Final implementation pass

- Résumé downloads are staged beside the destination and atomically renamed only after the stream finishes and PDF signature/end-marker checks pass. Authentication, invalid-content, interrupted-stream, and stream-timeout failures preserve the previous file.
- No configured document ID means the existing PDF is reused. If none is valid, the site shows a contact fallback. The browser checks the served file instead of trusting a hardcoded availability flag.
- Removed unused GitHub/Medium fetching from the build script; the Medium request had been breaking the normal build with a 403. `NODE_OPTIONS=--openssl-legacy-provider npm run build` now passes through the normal prebuild workflow.
- Social icon links have accessible names, and the theme toggle has a visible keyboard-focus ring without global input styling.
- Added a 1200×630 sharing image and Open Graph/Twitter metadata. Source: `public/social-preview.svg`; output: `public/social-preview.png`. To regenerate, run `node scripts/render-social-preview.cjs` with Playwright installed, or set `PLAYWRIGHT_MODULE` to an existing Playwright module path. Include the generated PNG in the eventual commit so builds do not require a browser. Metadata uses the production domain; external sharing previews will update only after deployment and any platform recrawl.
- Added a four-part WeRide case study under inDrive: challenge, responsibility, architectural decision, and delivery outcome. It uses only the supplied facts and makes no broader rollout or commercial-success claims.
- Eleven tests pass, covering safe PDF replacement and failure handling plus the app smoke test. Browser checks passed at 320/390/1440 pixels in both themes, including case-study expansion, named contact links, keyboard theme controls, and valid/missing/HTML/truncated PDF cases.

The résumé remains ignored by git and can be fetched using `RESUME_DOCUMENT_ID` and `token.json`. A fresh checkout without those credentials builds with a useful contact fallback. Before deployment, ensure the intended PDF is supplied or the download is configured. Nothing was deployed during this task.
