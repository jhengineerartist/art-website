'use client'
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils/uxbehaviors";

type Props = {
  heroImage: {
    src: StaticImageData;
    alt: string;
  };
  heroLogo?: boolean;
};

export default function HeroSection({ heroImage, heroLogo }: Props) {
  const logo = heroLogo ? (
    <Image src="/artlogo.svg" alt="Art Logo" className="invert" fill priority />
  ) : undefined;

  return (
    <section id="hero" className="h-screen" >
      <div className="flex flex-col justify-center items-center bg-gradient-to-t from-black to-33 relative h-full w-full max-h-screen"
      >
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          className="stick object-cover z-0 mix-blend-overlay"
          fill
          placeholder="blur"
          quality={100}
        />
        <div className="flex flex-col relative my-auto text-white text-center z-1">
          <h1 className="text-4xl sm:text-6xl p-6 font-bold">
            Jose Hirshman Art
          </h1>
          <div className="relative h-32">{logo}</div>
          <Link
            className="w-fit mx-auto lg:text-2xl text-lg py-2 px-4 border-4 border-enchilada-200 bg-enchilada-200 hover:bg-enchilada-600 hover:border-enchilada-700 text-white rounded-lg transition-all duration-300 mt-10"
            href="/portfolio">
            Explore the Portfolio
          </Link>

        </div>
        <div
          className="cursor-pointer relative w-full mt-auto pt-12 sm:pt-24 mb-24 text-white text-6xl"
          onClick={() => scrollToSection("blog")}
        >
          <FaChevronDown className="mx-auto" />
        </div>
      </div>
    </section>
  );
}
