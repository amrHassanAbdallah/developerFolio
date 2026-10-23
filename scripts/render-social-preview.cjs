// Use an installed Playwright, or set PLAYWRIGHT_MODULE to its module path.
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const path = require("path");
const {pathToFileURL} = require("url");

(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({viewport: {width: 1200, height: 630}, deviceScaleFactor: 1});
    await page.goto(pathToFileURL(path.resolve(__dirname, "../public/social-preview.svg")).href);
    await page.screenshot({path: path.resolve(__dirname, "../public/social-preview.png")});
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error.message); process.exitCode = 1; });
