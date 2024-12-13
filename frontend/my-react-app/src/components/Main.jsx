import React, { useState } from "react";
import Results from "./Results";

function Main() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    setUploadedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Placeholder for submission logic
    console.log("File submitted:", uploadedFile);
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
      <div className="w-full max-w-md">
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
      <button
        onClick={handleSubmit}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-5"
      >
        Submit for Review
      </button>
      <Results />
    </main>
  );
}

export default Main;
