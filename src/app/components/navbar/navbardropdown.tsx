import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

type DropdownParams = {
    isDropdownOpen: boolean;
    toggleDropdown: () => void;
}

export default function NavbarDropdown({ isDropdownOpen, toggleDropdown }: DropdownParams) {

    const dropdownLinkClass = "block text-white text-xl hover:text-enchilada-100 sm:hidden p-2";
    return (
        <div className="sm:hidden relative">
            {/* Hamburger Icon */}
            <button className="no-underline text-white hover:bg-enchilada-900 hover:border-enchilada-900 hover:rounded-lg px-2 py-1 transition-all duration-300" onClick={toggleDropdown}>
                <FaBars className="text-white text-2xl transition-colors duration-300" />
            </button>
            {/* Dropdown Menu */}
            <div className={`absolute bg-enchilada-600 p-2 top-16 right-0 max-w-screen w-[calc(100vw-3rem)] space-y-2 border border-enchilada-800 rounded transform origin-top-right transition-transform duration-300 ${isDropdownOpen ? "block" : "hidden"}`}>
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
                <Link href="/resume" className={dropdownLinkClass}>
                    Resume
                </Link>
            </div>
        </div>
    );
}
