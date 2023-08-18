import React from "react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";


function SocialMedia() {

    const socialMediaIconClass = "text-enchilada-100 hover:text-white hover:bg-enchilada-900 hover:border-enchilada-900 hover:rounded-lg p-2 transition-all duration-300";

    return (
        <div className="hidden text-4xl sm:flex gap-2">
            <Link
                className={socialMediaIconClass}
                href="https://github.com/jhengineerartist"
            >
                <FaGithub />
            </Link>
            <Link
                className={socialMediaIconClass}
                href="https://twitter.com/JH_EngArt"
            >
                <FaTwitter />
            </Link>
            <Link
                className={socialMediaIconClass}
                href="https://www.instagram.com/jhirshmanart/"
            >
                <FaInstagram />
            </Link>
        </div>
    )
}

export default SocialMedia
