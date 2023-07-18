import React from "react"
import Image, { StaticImageData } from 'next/image'

type Props = {
    heroImage: {
        src: StaticImageData
        blurUrl: string
        alt: string
    }
    heroLogo?: boolean
}

export default function HeroSection({ heroImage, heroLogo }: Props) {
    const logo = heroLogo
        ? <Image
            src="/artlogo.svg"
            alt="Art Logo"
            className="invert"
            fill
            priority
        />
        : undefined
    return (
        <section id="hero">
            <div className="bg-gradient-to-t from-black to-33 relative w-full h-screen flex items-center sm:h[450px] lg:h-[800px]">
                <Image
                    src={heroImage.src}
                    blurDataURL={heroImage.blurUrl}
                    alt={heroImage.alt}
                    className="stick object-cover z-0 mix-blend-overlay"
                    fill
                    quality={100}
                />
                <div className="relative mx-auto text-white text-center z-1">
                    <h1 className="text-6xl p-6 font-bold">Jose Hirshman Art</h1>
                    <div className="relative p-16">
                        {logo}
                    </div>
                    <p className="text-2xl p-6">Explore the Portfolio</p>
                </div>
            </div>
        </section>
    )
}
