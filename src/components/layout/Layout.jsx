import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Router from "../../router/Router";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Router />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
