'use client'
import Image from "next/image";
import { FullScreenImage, useFullScreenImage } from "@/app/components/fullscreenimage";
import type { GetStaticProps } from 'next'
import getAllArtData from "@/lib/artprovider/artworkprovider";

type Params = {
    artworkData: ArtworkInfo[];
};

export default function PortfolioView({ artworkData }: Params) {
    const [fullScrImage, showFullScreen, hideFullScreen] = useFullScreenImage();

    const images = artworkData.map((artwork) => {
        return (
            <div key={artwork.id} className="ml-3 mb-3 group cursor-pointer" onClick={showFullScreen(artwork)}>
                <figure className="flex flex-col items-center bg-panettone-100">
                    <Image
                        className="object-scale-down h-72 w-auto border-8 border-transparent drop-shadow-xl"
                        src={artwork.src}
                        width={artwork.width}
                        height={artwork.height}
                        alt={artwork.title}
                        blurDataURL={artwork.lowResSrc}
                        placeholder="blur"
                        loading="eager"
                    />
                    <figcaption className="text-sm text-center bg-panettone-100 overflow-hidden whitespace-nowrap overflow-ellipsis w-full p-2">
                        {artwork.title}
                    </figcaption>
                </figure>
            </div>

        );
    });

    return (
        <div className="min-h-screen">
            <h1 className="text-panettone-100 mx-auto p-3 text-4xl text-center">Portfolio</h1>
            <div className="flex flex-wrap content-center justify-center h-full w-full">
                {images}
            </div>
            <FullScreenImage {...{ state: fullScrImage, hideFullScreen: hideFullScreen }} />
        </div>
    );
}
