import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-200 to-indigo-300">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
