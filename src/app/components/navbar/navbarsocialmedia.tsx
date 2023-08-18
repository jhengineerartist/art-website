import React from "react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";


function NavbarSocialMedia() {
    return (
        <div className="hidden text-4xl sm:flex gap-2">
            <Link
                className="text-enchilada-100 hover:text-white hover:border-enchilada-900 px-2 py-1 hover:rounded"
                href="https://github.com/jhengineerartist"
            >
                <FaGithub />
            </Link>
            <Link
                className="text-enchilada-100 hover:text-white hover:border-enchilada-900 px-2 py-1 hover:rounded"
                href="https://twitter.com/JH_EngArt"
            >
                <FaTwitter />
            </Link>
            <Link
                className="text-enchilada-100 hover:text-white hover:border-enchilada-900 px-2 py-1 hover:rounded"
                href="https://www.instagram.com/jhirshmanart/"
            >
                <FaInstagram />
            </Link>
        </div>
    )
}

export default NavbarSocialMedia
