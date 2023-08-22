"use client"
import React from "react";
import Link from "next/link";
import { assertEventTargetIsNode } from "@/lib/utils/asserts";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";


export default function NavbarDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      assertEventTargetIsNode(event.target);
      if (isDropdownOpen) {
        toggleDropdown();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [toggleDropdown]);


  const dropdownLinkClass =
    "block text-white text-xl hover:text-enchilada-100 sm:hidden p-2";
  return (
    <div className="sm:hidden relative">
      {/* Hamburger Icon */}
      <button
        aria-label="Dropdown Site Menu"
        className="no-underline text-white hover:bg-enchilada-900 hover:border-enchilada-900 hover:rounded-lg px-2 py-1 transition-all duration-300"
        onClick={toggleDropdown}
      >
        <FaBars className="text-white text-2xl transition-colors duration-300" />
      </button>
      {/* Dropdown Menu */}
      <div
        className={`absolute bg-enchilada-600 p-2 top-16 right-0 max-w-screen w-[calc(100vw-3rem)] space-y-2 border border-enchilada-800 rounded transform origin-top-right transition-transform duration-300 ${isDropdownOpen ? "block" : "hidden"
          }`}
      >
        {/* Display dropdown options for smaller screens */}
        <Link href="/blog" className={dropdownLinkClass}>
          Blog
        </Link>
        <Link href="/portfolio" className={dropdownLinkClass}>
          Portfolio
        </Link>
        <Link href="/about" className={dropdownLinkClass}>
          About Me
        </Link>
        <Link
          href="https://resume.io/r/HKNuTy6hx"
          className={dropdownLinkClass}
        >
          Resume
        </Link>
      </div>
    </div >
  );
}
