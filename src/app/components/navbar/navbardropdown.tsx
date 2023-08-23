"use client";
import React from "react";
import Link from "next/link";
import { assertEventTargetIsNode } from "@/lib/utils/asserts";
import { FaBars } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function NavbarDropdown() {
  /**
   * The behavior of the navbar dropdown is a bit nuanced:
   * If the navbar is Open:
   * If a user clicks outside the navbar dropdown, it hides
   * If a user navigates to a new page, it hides
   * If a user clicks on the bar but doesnt navigate, it remains open.
   *
   * If the navbar is Closed:
   * It only opens when the user clicks the hamburger icon.
   *
   * This is accomplished via
   * 1. useState hook to designate that the dropdown is open or not.
   * 2. useRef hook to refer to the dropdown div for click evaluation.
   * 3. usePathname hook to close the menu when we navigate.
   * 4. useEffect hooks to register and deregister the handler as well
   * as checking for navigation on path change
   */

  // State Hook
  const path = usePathname();
  const [{ isDropdownOpen, prevPath }, setIsDropdownOpen] = useState({
    isDropdownOpen: false,
    prevPath: path,
  });
  const toggleDropdown = () => {
    setIsDropdownOpen(({ isDropdownOpen }) => ({
      isDropdownOpen: !isDropdownOpen,
      prevPath,
    }));
  };

  const closeRef = useRef<HTMLDivElement>(null);
  // Effect for handler registration
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      assertEventTargetIsNode(event.target);
      if (
        closeRef.current &&
        !closeRef.current.contains(event.target) &&
        isDropdownOpen
      ) {
        toggleDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [closeRef, toggleDropdown]);

  useEffect(() => {
    // If we navigated then hide the dropdown
    if (isDropdownOpen && prevPath !== path) {
      setIsDropdownOpen(({ isDropdownOpen }) => ({
        isDropdownOpen: !isDropdownOpen,
        prevPath: path,
      }));
    }
  }, [prevPath, path, isDropdownOpen]);

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
        className={`absolute bg-enchilada-600 p-2 top-16 right-0 max-w-screen w-[calc(100vw-3rem)] space-y-2 border border-enchilada-800 rounded transform origin-top-right transition-transform duration-300 ${
          isDropdownOpen ? "block" : "hidden"
        }`}
        ref={closeRef}
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
    </div>
  );
}
