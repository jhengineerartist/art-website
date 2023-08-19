"use client"
import React, { useState } from "react";
import NavbarDropdown from "./navbardropdown";
import SocialMedia from "../socialmedia";
import NavbarLinks from "./navbarlinks";
import NavbarLogo from "./navbarlogo";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-enchilada-500 p-4 sticky top-0 drop-shadow-xl z-10" id="navbar">
      <div className="mx-auto flex justify-between items-center">
        <NavbarLogo />
        <NavbarLinks />
        <SocialMedia placement="navbar" />
        <NavbarDropdown isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
      </div>
    </nav>
  );
}
