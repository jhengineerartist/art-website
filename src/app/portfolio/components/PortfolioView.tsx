'use client'
import Image from "next/image";
import { useState } from "react";
import { FullScreenImage, useFullScreenImage } from "@/app/components/fullscreenimage";


type Params = {
    artworkData: ArtworkInfo[]
}

export default function PortfolioView({ artworkData }: Params) {

    const [fullScrImage, showFullScreen, hideFullScreen] = useFullScreenImage();

    const images = artworkData.map(artwork => {
        return (
            <figure className="bg-white ml-3 mb-3 p-3 group">
                <Image
                    className="object-scale-down mx-auto h-72 w-fit relative drop-shadow-2xl"
                    src={artwork.src}
                    width={artwork.width}
                    height={artwork.height}
                    alt={artwork.title}
                    onClick={showFullScreen(artwork)}
                />
                <figcaption className="text-sm w-full hidden relative group-hover:inline truncate">{artwork.title}</figcaption>
            </figure>
        )
    });

    return (<div className="min-h-screen">
        <h1 className="text-panettone-100 mx-auto p-3 text-4xl text-center">Portfolio</h1>
        <div className="flex flex-wrap content-center justify-center h-full w-full">
            {images}
        </div>
        <FullScreenImage {...{ state: fullScrImage, hideFullScreen: hideFullScreen }} />
    </div>)
}