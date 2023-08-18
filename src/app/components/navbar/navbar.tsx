"use client"
import React, { useState } from "react";
import NavbarDropdown from "./navbardropdown";
import NavbarSocialMedia from "./navbarsocialmedia";
import NavbarLinks from "./navbarlinks";
import NavbarLogo from "./navbarlogo";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-enchilada-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="mx-auto flex justify-between items-center">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarSocialMedia />
        <NavbarDropdown isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
      </div>
    </nav>
  );
}
