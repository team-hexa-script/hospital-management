"use client";

import classNames from "@/utils/classNames";
import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "HexaCentral Clinic",
  description: "HexaCentral Clinic is an Hospital management application",
};

const RootLayout = ({ children }) => {
  console.log("from layout");
  return (
    <html lang="en">
      <body
        className={classNames(
          roboto.variable,
          "container mx-auto px-2 font-roboto"
        )}
      >
        <div className="flex min-h-screen flex-col justify-between">
          <div>
            <Navbar></Navbar>
            <main>{children}</main>
          </div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
