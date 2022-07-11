import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const HomepageLayout = (props) => {
  return (
    <div>
      <Header {...props} />
      <main className="homepage"> {props.children}</main>
      <Footer />
    </div>
  );
};

export default HomepageLayout;
