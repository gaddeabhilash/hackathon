const { checkPlagiarism } = require("../utils/plagiarismChecker");

const handlePlagiarismCheck = async (req, res) => {
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
      .json({ error: "An internal error occurred. Please try again later." });
  }
};

module.exports = { handlePlagiarismCheck };
