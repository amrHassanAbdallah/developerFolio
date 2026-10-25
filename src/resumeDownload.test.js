/** @jest-environment node */
const fs = require("fs");
const os = require("os");
const path = require("path");
const {Readable} = require("stream");
const {refreshResume} = require("../scripts/resume-download");
const {isPdf} = require("./lib/pdf");

// Signature/end-marker fixtures: tests target safe replacement, not PDF parsing.
const oldPdf = Buffer.from("%PDF-1.4\nold document\n%%EOF\n");
const newPdf = Buffer.from("%PDF-1.7\nnew document\n%%EOF\n");
let directory;
let resumePath;
beforeEach(async () => {
  directory = await fs.promises.mkdtemp(
    path.join(os.tmpdir(), "portfolio-resume-test-")
  );
  resumePath = path.join(directory, "resume.pdf");
  await fs.promises.writeFile(resumePath, oldPdf);
});
afterEach(() => fs.promises.rm(directory, {recursive: true, force: true}));

test("replaces the old PDF only after the entire new stream succeeds", async () => {
  async function* chunks() {
    yield newPdf.slice(0, 12);
    expect(await fs.promises.readFile(resumePath)).toEqual(oldPdf);
    yield newPdf.slice(12);
  }
  expect(
    await refreshResume({
      resumePath,
      download: async () => Readable.from(chunks())
    })
  ).toEqual({available: true, updated: true});
  expect(await fs.promises.readFile(resumePath)).toEqual(newPdf);
  expect(await fs.promises.readdir(directory)).toEqual(["resume.pdf"]);
});

test.each([
  ["empty response", Buffer.alloc(0)],
  ["HTML error response", Buffer.from("<html>Not authorized</html>")],
  ["truncated PDF", Buffer.from("%PDF-1.7\nincomplete document")]
])("preserves the existing PDF on %s", async (_, bytes) => {
  const result = await refreshResume({
    resumePath,
    download: async () => Readable.from([bytes])
  });
  expect(result).toEqual({available: true, updated: false, failed: true});
  expect(await fs.promises.readFile(resumePath)).toEqual(oldPdf);
  expect(await fs.promises.readdir(directory)).toEqual(["resume.pdf"]);
});

test("preserves the existing PDF on authentication failure", async () => {
  const result = await refreshResume({
    resumePath,
    download: async () => {
      throw new Error("unauthorized");
    }
  });
  expect(result.failed).toBe(true);
  expect(await fs.promises.readFile(resumePath)).toEqual(oldPdf);
});

test("preserves the existing PDF on a mid-stream failure", async () => {
  async function* broken() {
    yield newPdf.slice(0, 10);
    throw new Error("connection lost");
  }
  const result = await refreshResume({
    resumePath,
    download: async () => Readable.from(broken())
  });
  expect(result.failed).toBe(true);
  expect(await fs.promises.readFile(resumePath)).toEqual(oldPdf);
  expect(await fs.promises.readdir(directory)).toEqual(["resume.pdf"]);
});

test("times out stalled streams without damaging the existing file", async () => {
  const result = await refreshResume({
    resumePath,
    download: async () => new Readable({read() {}}),
    timeoutMs: 20
  });
  expect(result.failed).toBe(true);
  expect(await fs.promises.readFile(resumePath)).toEqual(oldPdf);
});

test("reports missing PDF availability without creating a placeholder", async () => {
  await fs.promises.unlink(resumePath);
  expect(await refreshResume({resumePath})).toEqual({
    available: false,
    updated: false
  });
  expect(await fs.promises.readdir(directory)).toEqual([]);
});

test("keeps a cached PDF when no download is configured", async () => {
  expect(await refreshResume({resumePath})).toEqual({
    available: true,
    updated: false
  });
  expect(await fs.promises.readFile(resumePath)).toEqual(oldPdf);
});

test("accepts a browser Uint8Array and rejects an HTML fallback", () => {
  expect(isPdf(new Uint8Array(newPdf))).toBe(true);
  expect(isPdf(new Uint8Array(Buffer.from("<html>portfolio</html>")))).toBe(
    false
  );
});
