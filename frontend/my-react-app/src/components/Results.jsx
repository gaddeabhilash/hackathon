function Results({ results }) {
  if (!results) {
    return null; // No results to display
  }

  return (
    <div className="bg-white shadow-md rounded p-5 w-full max-w-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Plagiarism Results
      </h3>
      <p className="text-gray-600">
        Similarity:{" "}
        <span className="font-bold text-green-600">{results.similarity}%</span>
      </p>
      <p className="text-gray-600">
        Matched Sections:{" "}
        <span className="font-bold text-red-600">
          {results.matchedSections}
        </span>
      </p>

      {/* Displaying detailed results */}
      <div className="mt-3">
        <h4 className="text-gray-800 text-md font-semibold mb-2">
          Matched Sources:
        </h4>
        {results.matchedSources && results.matchedSources.length > 0 ? (
          <ul className="list-disc ml-5">
            {results.matchedSources.map((source, index) => (
              <li key={index} className="text-sm text-blue-500">
                <a href={source.link} target="_blank" rel="noopener noreferrer">
                  {source.snippet}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">No matched sources found.</p>
        )}
      </div>

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
