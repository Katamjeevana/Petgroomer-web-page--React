import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "./HomePage"; // Import the HomePage component
import Footer from "./footer";

const Wrapper = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <HomePage />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Wrapper;