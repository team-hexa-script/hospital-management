"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">Hospital Management System</h2>
          <p className="mt-2">Your Address Line 1</p>
          <p>Your Address Line 2</p>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a href="/" className="mx-2 hover:underline">
            Home
          </a>
          <a href="/about" className="mx-2 hover:underline">
            About
          </a>
          <a href="/services" className="mx-2 hover:underline">
            Services
          </a>
          <a href="/contact" className="mx-2 hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
