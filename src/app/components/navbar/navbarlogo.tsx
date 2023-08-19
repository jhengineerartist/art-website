import React from "react";
import Link from "next/link";

export default function NavbarLogo() {
    return (
        <div className="flex flex-row justify-center sm:justify-start gap-4 text-enchilada-100 lg:text-4xl text-2xl transition-all duration-500">
            <Link href="/" className="no-underline text-white hover:bg-enchilada-900 hover:border-enchilada-900 hover:rounded-lg px-2 py-1 transition-all duration-300">
                Jose Hirshman
            </Link>
        </div >)
}