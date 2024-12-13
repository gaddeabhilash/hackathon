import React from "react";

function Results() {
  return (
    <div className="bg-white shadow-md rounded p-5 w-full max-w-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Results</h3>
      <p className="text-gray-600">
        Similarity: <span className="font-bold text-green-600">12%</span>
      </p>
      <p className="text-gray-600">
        Matched Sections: <span className="font-bold text-red-600">5</span>
      </p>
      <a
        href="#"
        className="text-blue-500 hover:underline text-sm mt-3 inline-block"
      >
        View Detailed Report
      </a>
    </div>
  );
}

export default Results;
