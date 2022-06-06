import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
