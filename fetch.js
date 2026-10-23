const path = require("path");
const {google} = require("googleapis");
const {refreshResume} = require("./scripts/resume-download");

require("dotenv").config();

async function downloadResume() {
  const documentId = process.env.RESUME_DOCUMENT_ID;
  const resumePath = path.join(".", "public", "resume.pdf");
  const result = await refreshResume({
    resumePath,
    download: documentId ? async () => {
      const auth = new google.auth.GoogleAuth({
        keyFile: "token.json",
        scopes: ["https://www.googleapis.com/auth/drive.readonly"]
      });
      const response = await google.drive("v3").files.get(
        {fileId: documentId, alt: "media", auth},
        {responseType: "stream", timeout: 30000, retry: false}
      );
      return response.data;
    } : null
  });
  if (result.failed) console.warn("Resume refresh failed; existing PDF was preserved.");
  console.log(result.available ? "Resume PDF ready." : "No valid PDF available; the resume page will show contact details.");
}

downloadResume().catch(() => {
  console.error("Unable to prepare resume assets.");
  process.exitCode = 1;
});
