"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/patient",
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
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className=" bg-white shadow-md ">
      <nav className="flex items-center justify-between container mx-auto py-2">
        <h1 className="text-3xl font-semibold">hospital</h1>

        {/* Dekstop Menu */}
        <ul
          className={`md:flex ${
            menuOpen ? "block" : "hidden"
          } md:items-center md:py-8 md:font-semibold md:justify-center`}
        >
          {navLinks.map(({ path, title }) => (
            <li className="mx-2" key={path}>
              <NavLink
                exact={path === "/"}
                activeClassName="text-blue-800"
                href={path}
              >
                {title}
              </NavLink>
            </li>
          ))}

          {/* Search Icon */}
          <FontAwesomeIcon icon={faSearch} />
        </ul>

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
