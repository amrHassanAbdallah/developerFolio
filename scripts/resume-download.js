const fs = require("fs");
const path = require("path");
const {pipeline} = require("stream");
const {promisify} = require("util");
const {isPdf} = require("../src/lib/pdf");
const pipe = promisify(pipeline);

async function validFile(file) {
  try {
    return isPdf(await fs.promises.readFile(file));
  } catch {
    return false;
  }
}

// Stage beside the destination so rename is atomic on the same filesystem.
// Never open the existing résumé for writing until the new file is validated.
async function refreshResume({resumePath, download, timeoutMs = 30000}) {
  if (!download) return {available: await validFile(resumePath), updated: false};
  let staging;
  let timer;
  try {
    staging = await fs.promises.mkdtemp(path.join(path.dirname(resumePath), ".resume-"));
    const temporaryFile = path.join(staging, "resume.pdf");
    const stream = await download();
    timer = setTimeout(() => stream.destroy(new Error("Resume download timed out")), timeoutMs);
    await pipe(stream, fs.createWriteStream(temporaryFile, {flags: "wx"}));
    clearTimeout(timer);
    if (!(await validFile(temporaryFile))) throw new Error("Invalid PDF download");
    await fs.promises.rename(temporaryFile, resumePath);
    return {available: true, updated: true};
  } catch {
    // Do not log remote error payloads, which may contain credentials or IDs.
    return {available: await validFile(resumePath), updated: false, failed: true};
  } finally {
    clearTimeout(timer);
    if (staging) await fs.promises.rm(staging, {recursive: true, force: true});
  }
}

module.exports = {refreshResume};
