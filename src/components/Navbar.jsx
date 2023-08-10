"use client";
import React from "react";
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
  return (
    <div className=" bg-white shadow-md ">
      <nav className="flex items-center justify-between container mx-auto py-2">
        <h1 className="text-3xl font-semibold">hospital</h1>

        <ul className="flex items-center py-8 font-semibold justify-center">
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
          <FontAwesomeIcon icon={faSearch} />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
