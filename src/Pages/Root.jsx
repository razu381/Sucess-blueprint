import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

function Root() {
  return (
    <div className="">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
