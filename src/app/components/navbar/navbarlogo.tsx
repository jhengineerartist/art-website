import React from "react";
import Link from "next/link";

export default function NavbarLogo() {
    return (
        <div className="flex flex-row justify-center sm:justify-start gap-4 text-enchilada-100 lg:text-4xl md:text-2xl transition-all duration-500">
            <Link href="/" className="text-enchilada-100 no-underline hover:text-white">
                Jose Hirshman
            </Link>
        </div>)
}