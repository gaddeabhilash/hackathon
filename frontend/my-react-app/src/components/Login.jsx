import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill out both fields!");
      return;
    }

    setLoading(true); // Show loading state
    setErrorMessage(""); // Reset error message

    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid login credentials");
      }

      const data = await response.json();
      alert("Login successful!");

      // Store the token or user info in localStorage or sessionStorage
      localStorage.setItem("authToken", data.token); // assuming the response contains a token

      // On successful login, navigate to the main page (plagiarism checker)
      navigate("/main");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-green-200">
      <h2 className="text-4xl font-bold mb-6">Login to Your Account</h2>
      <form
        className="bg-white shadow-md rounded-lg p-6 max-w-md w-full"
        onSubmit={handleSubmit}
      >
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-400 rounded-lg p-3 w-full"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-400 rounded-lg p-3 w-full"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md"
          disabled={loading} // Disable button when loading
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
