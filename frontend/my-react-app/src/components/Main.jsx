import React, { useState, useEffect } from "react";
import Results from "./Results.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Main() {
  const [inputMode, setInputMode] = useState("file");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [textInput, setTextInput] = useState("");
  const [plagiarismResults, setPlagiarismResults] = useState(null);
  const navigate = useNavigate();

  // Check if the user is authenticated
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login"); // Redirect to login page if no token
    }
  }, [navigate]);

  const handleInputChange = (event) => {
    setInputMode(event.target.value);
  };

  const handleFileUpload = (event) => {
    setUploadedFile(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = async () => {
    if (inputMode === "file" && uploadedFile) {
      // Handle file submission
      const formData = new FormData();
      formData.append("file", uploadedFile);

      try {
        const response = await axios.post(
          "http://localhost:3000/api/plagiarism/check-file",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setPlagiarismResults(response.data.results);
      } catch (error) {
        console.error("Error checking file plagiarism:", error);
      }
    } else if (inputMode === "text" && textInput) {
      // Handle text submission
      try {
        const response = await axios.post(
          "http://localhost:3000/api/plagiarism/check-text",
          {
            text: textInput,
          }
        );
        setPlagiarismResults(response.data.results);
      } catch (error) {
        console.error("Error checking text plagiarism:", error);
      }
    }
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center p-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-5">
        Ensure Originality Across Your Work
      </h2>
      <p className="text-lg text-gray-700 text-center mb-8">
        Detect plagiarism in documents, code, or text files. Supported formats:
        <span className="font-semibold">
          {" "}
          .txt, .docx, .pdf, .py, .java, .js, and more
        </span>
        .
      </p>
      <div className="w-full max-w-md mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="file"
              checked={inputMode === "file"}
              onChange={handleInputChange}
            />
            <span>Upload File</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="text"
              checked={inputMode === "text"}
              onChange={handleInputChange}
            />
            <span>Enter Text</span>
          </label>
        </div>

        {inputMode === "file" ? (
          <div>
            <label
              htmlFor="file-upload"
              className="block text-gray-700 font-semibold mb-2"
            >
              Upload Your File
            </label>
            <input
              type="file"
              id="file-upload"
              className="w-full mb-4 border border-gray-400 rounded p-2"
              accept=".txt,.docx,.pdf,.py,.java,.js"
              onChange={handleFileUpload}
            />
          </div>
        ) : (
          <div>
            <label
              htmlFor="text-input"
              className="block text-gray-700 font-semibold mb-2"
            >
              Enter Your Text
            </label>
            <textarea
              id="text-input"
              className="w-full mb-4 border border-gray-400 rounded-lg p-2 h-32"
              value={textInput}
              onChange={handleTextChange}
            />
          </div>
        )}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-5"
      >
        Submit for Review
      </button>

      {plagiarismResults && <Results results={plagiarismResults} />}
    </main>
  );
}

export default Main;
