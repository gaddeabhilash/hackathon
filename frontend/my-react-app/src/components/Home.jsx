import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 text-white">
      <h2 className="text-5xl font-extrabold mb-6">
        Protect Your Content with Our Plagiarism Checker
      </h2>
      <p className="text-lg mb-8 max-w-3xl text-center">
        Check your content for plagiarism, ensure originality, and maintain
        academic integrity with our powerful tool.
      </p>
      <div className="flex space-x-6">
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-xl transition duration-300"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded-full text-xl transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home;
