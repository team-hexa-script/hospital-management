"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "@/assets/logo2.png";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/patientManagement",
    title: "Patient Management",
  },
  {
    path: "/pharmacy",
    title: "Pharmacy",
  },
  {
    path: "/laboratory",
    title: "Laboratory",
  },
  {
    path: "/departments",
    title: "Departments",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
];

const Navbar = () => {
  const { user, logout } = useAuth();

  // const { uid, displayName, photoURL } = user || {};
  // const user = true;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinksToShow = user
    ? [...navLinks, { path: "/dashboard", title: "Dashboard" }]
    : navLinks;

  const handleLogout = async () => {
    await logout()
  }

  return (
    <div className="sticky w-full top-0 bg-white  shadow-md z-10">
      <nav className="flex items-center justify-between container mx-auto my-2">
        <div className="md:flex items-center">
          <Image className="w-20" src={logo} alt=""></Image>
          <h1 className="text-sky-600 text-sm md:text-2xl font-bold">
            HexaCentral{" "}
            <span className="text-red-600 text-sm md:text-2xl font-bold">
              Clinic
            </span>
          </h1>
        </div>

        {/* Dekstop Menu */}
        <ul
          className={`md:flex ${menuOpen ? "block" : "hidden"
            } md:items-center md:py-4 md:font-semibold md:justify-center`}
        >
          {navLinksToShow.map(({ path, title }) => (
            <li className="mx-2" key={path}>
              <NavLink
                exact={path === "/"}
                activeClassName="text-sky-600"
                className="transition-all hover:text-red-600"
                href={path}
              >
                {title}
              </NavLink>
            </li>
          ))}

          <li className="mx-2">
            <FontAwesomeIcon icon={faSearch} />
          </li>

          {user ? (
            // User is logged in, show dashboard link
            <li className="mx-2">
              <button onClick={handleLogout}>Log out</button>
            </li>
          ) : (
            // User is not logged in, show login button
            <li className="mr-10">
              <button className="bg-transparent hover:bg-blue-600 text-sky-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <Link href={"/login"}>Login</Link>
              </button>
            </li>
          )}
        </ul>
        {/* Add Login Button */}

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-blue-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
