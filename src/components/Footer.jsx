"use client";

import Link from "next/link";
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
          <Link href="/" className="mx-2 hover:underline">
            Home
          </Link>
          <Link href="/about" className="mx-2 hover:underline">
            About
          </Link>
          <Link href="/services" className="mx-2 hover:underline">
            Services
          </Link>
          <Link href="/contact" className="mx-2 hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
