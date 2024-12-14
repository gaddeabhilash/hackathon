const axios = require("axios");

const checkPlagiarism = async (text) => {
  const chunks = text.match(/.{1,50}/g) || []; // Split text into chunks of 50 characters
  const results = [];

  for (const chunk of chunks) {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/customsearch/v1",
        {
          params: {
            key: "AIzaSyDIeNKV7gmLN_Ws79ZFxUwhjsAQVkp1h9I", // Replace with your actual Google API key
            cx: "d63cc2ce9cc524a56", // Replace with your actual Google Custom Search Engine ID
            q: chunk,
          },
        }
      );
      if (response.data.items) {
        results.push(
          ...response.data.items.map((item) => ({
            link: item.link,
            snippet: item.snippet,
          }))
        );
      }
    } catch (error) {
      console.error("API error for chunk:", chunk, error);
    }
  }

  return results;
};

module.exports = { checkPlagiarism };
