import React from "react";
import Link from "next/link";

export default function NavbarLinks() {
    return (
        <div className="hidden sm:flex gap-4" >
            <Link
                href="/blog"
                className=" text-white hover:text-enchilada-100 hover:border-enchilada-900 px-2 py-1 hover:rounded"
            >
                Blog
            </Link>
            <Link
                href="/portfolio"
                className=" text-white hover:text-enchilada-100 hover:border-enchilada-900 px-2 py-1 hover:rounded"
            >
                Portfolio
            </Link>
            <Link
                href="/resume"
                className=" text-enchilada-100 no-underline hover:text-white hover:bg-enchilada-900 hover:border-enchilada-900 hover:rounded-lg px-2 py-1 transition-all duration-300"
            >
                Resume
            </Link>
        </div>
    )
}