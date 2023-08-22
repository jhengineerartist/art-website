"use client";
import Image from "next/image";
import {
  FullScreenImage,
  useFullScreenImage,
} from "@/app/components/fullscreenimage";
import type { GetStaticProps } from "next";
import { getAllArtData } from "@/lib/providers/artworkprovider";
import { info } from "console";

type Params = {
  artworkData: ArtworkData[];
};

export default function PortfolioView({ artworkData }: Params) {
  const [fullScrImage, showFullScreen, hideFullScreen] = useFullScreenImage();

  const images = artworkData.map((artwork) => {
    const { info, height, width, base64 } = artwork;

    return (
      <div
        key={info.id}
        className="ml-3 mb-3 group cursor-pointer"
        onClick={showFullScreen(artwork)}
      >
        <figure className="flex flex-col items-center bg-panettone-100">
          <Image
            className="object-scale-down h-64 w-auto border-8 border-transparent drop-shadow-xl"
            src={info.src}
            width={width}
            height={height}
            alt={info.title}
            blurDataURL={artwork.base64}
            placeholder="blur"
            loading="eager"
          />
          <figcaption className="text-sm text-center bg-panettone-100 overflow-hidden whitespace-nowrap overflow-ellipsis w-full p-2">
            {info.title}
          </figcaption>
        </figure>
      </div>
    );
  });

  return (
    <div className="min-h-screen">
      <div className="text-center mb-4">
        <h1 className="text-panettone-100 mx-auto p-3 text-4xl text-center">
          Portfolio
        </h1>
        <p className="text-panettone-100">
          A collection of my academic and professional artwork.
        </p>
      </div>
      <div className="flex flex-wrap max-w-screen-2xl mx-auto content-center justify-center h-full w-full">
        {images}
      </div>
      <FullScreenImage
        {...{ state: fullScrImage, hideFullScreen: hideFullScreen }}
      />
    </div>
  );
}
