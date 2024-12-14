import React from "react";

function Features() {
  const features = [
    "Detect Plagiarism Quickly and Accurately",
    "User-Friendly Interface",
    "Supports Multiple Languages",
    "Secure and Reliable",
    "Detailed Reports and Insights",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-200 to-purple-200">
      <h2 className="text-5xl font-extrabold mb-8 text-gray-800">
        Our Features
      </h2>
      <ul className="space-y-4 text-lg max-w-2xl">
        {features.map((feature, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-gray-700 border-l-4 border-indigo-500"
          >
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
