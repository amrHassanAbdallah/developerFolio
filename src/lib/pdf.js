// A lightweight file check, not a full PDF parser. Rejects empty files,
// HTML error responses, and downloads missing the PDF end marker.
function isPdf(bytes) {
  if (!bytes || bytes.length < 20) return false;
  const head = String.fromCharCode(...bytes.slice(0, 8));
  const tail = String.fromCharCode(...bytes.slice(-1024));
  return /^%PDF-\d\.\d/.test(head) && /%%EOF\s*$/.test(tail);
}

module.exports = {isPdf};
