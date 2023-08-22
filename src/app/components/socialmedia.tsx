import React from "react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

type SocialMediaProps = {
  placement: "navbar" | "footer";
};

function SocialMedia({ placement }: SocialMediaProps) {
  const rootButtonClass =
    "hover:text-white hover:bg-enchilada-600 hover:border-enchilada-600 hover:rounded-lg p-2 transition-all duration-300 text-enchilada-100";

  const buttonClass =
    placement === "footer"
      ? `${rootButtonClass} text-xl`
      : `${rootButtonClass} text-3xl`;

  return (
    <div
      className={`${placement === "navbar" ? "hidden sm:flex" : "flex"} gap-2`}
    >
      <Link className={buttonClass} href="https://github.com/jhengineerartist">
        <FaGithub />
      </Link>
      <Link className={buttonClass} href="https://twitter.com/JH_EngArt">
        <FaTwitter />
      </Link>
      <Link
        className={buttonClass}
        href="https://www.instagram.com/jhirshmanart/"
      >
        <FaInstagram />
      </Link>
    </div>
  );
}

export default SocialMedia;
