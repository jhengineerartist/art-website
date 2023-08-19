import React from "react";
import Link from "next/link";

export default function NavbarLinks() {

    const buttonClass = "no-underline text-white lg:text-lg md:text-md sm:text-sm hover:bg-enchilada-900 hover:border-enchilada-900 hover:rounded-lg px-2 py-1 transition-all duration-300"

    return (
        <div className="hidden sm:flex gap-4" >
            <Link
                href="/#blog"
                className={buttonClass}
            >
                Blog
            </Link>
            <Link
                href="/portfolio"
                className={buttonClass}
            >
                Portfolio
            </Link>
            <Link
                href="/about"
                className={buttonClass}
            >
                About
            </Link>
            <Link
                href="/resume"
                className={buttonClass}
            >
                Resume
            </Link>
        </div>
    )
}