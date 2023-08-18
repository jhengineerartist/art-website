import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

type DropdownParams = {
    isDropdownOpen: boolean;
    toggleDropdown: () => void;
}

export default function NavbarDropdown({ isDropdownOpen, toggleDropdown }: DropdownParams) {
    return (<div className="sm:hidden relative">
        {/* Hamburger Icon */}
        <button className="no-underline text-white hover:bg-enchilada-900 hover:border-enchilada-900 hover:rounded-lg px-2 py-1 transition-all duration-300" onClick={toggleDropdown}>
            <FaBars className="text-white text-2xl transition-colors duration-300" />
        </button>
        {/* Dropdown Menu */}
        <div className={`absolute bg-enchilada-600 p-2 top-14 right-0 max-w-screen w-60 space-y-2 border border-enchilada-800 rounded transform origin-top-right transition-transform duration-300 ${isDropdownOpen ? "block" : "hidden"}`}>
            {/* Display dropdown options for smaller screens */}
            <Link href="/#blog" className="block text-white hover:text-enchilada-100 sm:hidden">
                Blog
            </Link>
            <Link href="/portfolio" className="block text-white hover:text-enchilada-100 sm:hidden">
                Portfolio
            </Link>
            <Link href="/resume" className="block  text-white hover:text-enchilada-100 sm:hidden">
                Resume
            </Link>
        </div>
    </div>)
}