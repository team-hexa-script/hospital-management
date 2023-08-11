import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const WithLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default WithLayout;
