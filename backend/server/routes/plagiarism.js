const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");
const fs = require("fs");
const path = require("path");
const upload = multer({ dest: "uploads/" }); // Temporary storage for uploaded files

const { checkPlagiarism } = require("../utils/plagiarismChecker");

const router = express.Router();

// Helper function to read text from different file types
const extractTextFromFile = (filePath, fileType) => {
  switch (fileType) {
    case "pdf":
      return pdfParse(fs.readFileSync(filePath)).then((data) => data.text);
    case "docx":
      return mammoth
        .extractRawText({ path: filePath })
        .then((result) => result.value);
    default:
      return fs.promises.readFile(filePath, "utf8"); // For .txt, .py, .js, etc.
  }
};

// Plagiarism check for text
router.post("/check-text", async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res
      .status(400)
      .json({ error: "Text is required for plagiarism check." });
  }

  try {
    const results = await checkPlagiarism(text);
    res.json({ message: "Plagiarism check completed.", results });
  } catch (error) {
    console.error("Error during plagiarism check:", error);
    res
      .status(500)
      .json({ error: "An error occurred. Please try again later." });
  }
});

// Plagiarism check for file
router.post("/check-file", upload.single("file"), async (req, res) => {
  const file = req.file;
  if (!file) {
    return res
      .status(400)
      .json({ error: "File is required for plagiarism check." });
  }

  const filePath = path.join(__dirname, "..", "uploads", file.filename);
  const fileExtension = path.extname(file.originalname).toLowerCase();
  const fileType =
    fileExtension === ".pdf"
      ? "pdf"
      : fileExtension === ".docx"
      ? "docx"
      : "txt"; // Add more types if needed

  try {
    const fileContent = await extractTextFromFile(filePath, fileType);
    const results = await checkPlagiarism(fileContent);
    fs.unlinkSync(filePath); // Clean up the file after checking
    res.json({ message: "Plagiarism check completed.", results });
  } catch (error) {
    console.error("Error during plagiarism check:", error);
    fs.unlinkSync(filePath); // Clean up the file in case of error
    res
      .status(500)
      .json({ error: "An error occurred. Please try again later." });
  }
});

module.exports = router;
