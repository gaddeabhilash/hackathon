import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
