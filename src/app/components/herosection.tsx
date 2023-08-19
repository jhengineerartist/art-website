import React from "react";
import Image, { StaticImageData } from "next/image";

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
    <section id="hero" className="h-screen">
      <div className="flex items-center bg-gradient-to-t from-black to-33 relative h-full w-full">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          className="stick object-cover z-0 mix-blend-overlay"
          fill
          quality={100}
        />
        <div className="flex flex-col relative mx-auto text-white text-center z-1">
          <h1 className="lg:text-6xl md:text-6xl sm:text-4xl p-6 font-bold">
            Jose Hirshman Art
          </h1>
          <div className="relative h-32">{logo}</div>
          <p className="lg:text-2xl text-lg p-6">Explore the Portfolio</p>
        </div>
      </div>
    </section>
  );
}
