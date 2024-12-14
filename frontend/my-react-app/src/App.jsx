import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Layout from "./components/Layout";
import Main from "./components/Main"; // Import the Main component

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/main" element={<Main />} />{" "}
          {/* Add the route for the main page */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
