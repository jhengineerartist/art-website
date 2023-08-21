'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa"
import { assertEventTargetIsNode } from "@/lib/utils/asserts";

type Params = {
    state: [ArtworkInfo, boolean],
    hideFullScreen: () => () => void;
}

// Exposing the common hook logic used for setting up a full screen image view
export function useFullScreenImage(): [[ArtworkInfo, boolean], (a0: ArtworkInfo) => () => void, () => () => void] {
    // The useState state consists of the ArtworkInfo for the fullscreened artwork, 
    // and whether the fullscreen view is hidden (false) or shown (true)
    const [fullScrImage, setFullScrImage] = useState<[ArtworkInfo, boolean]>([{
        id: 0,
        data: {
            src: "",
            height: 0,
            width: 0,
            lowResSrc: ""
        },
        title: "",
        caption: "",
        date: "",
        class: "GalleryPiece",
        related: [],
        tags: [],
    },
        false]);

    const hideFullScreen = () => {
        return () => setFullScrImage([fullScrImage[0], false])
    }

    const showFullScreen = (imageInfo: ArtworkInfo) => {
        return () => setFullScrImage([imageInfo, true])
    }

    return [fullScrImage, showFullScreen, hideFullScreen]
}

export function FullScreenImage(params: Params) {
    const { state, hideFullScreen: setHidden } = params;
    const [{ data: { src, width, height, lowResSrc }, caption, title, date }, isFullScreen] = state;
    console.log(width)
    const closeRef = useRef<HTMLElement>(null);

    // Put a listener for when the user clicks somewhere,
    // determine what object was clicked, and if it wasn't the ref object then
    // close the fullscreen image view
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            assertEventTargetIsNode(event.target);
            if (closeRef.current && !closeRef.current.contains(event.target)) {
                setHidden()();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [closeRef, setHidden]);

    const localDate = new Date(date)
    const formattedDate = localDate.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    })

    const content = isFullScreen
        ? (
            <div className="flex justify-center items-center">
                <figure ref={closeRef} className="flex flex-col rounded-md my-auto bg-enchilada-100 justify-center fixed z-10 max-w-5xl max-h-[80vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl h-fit w-[80%]">
                    <div className="flex-none">
                        <FaTimes aria-label="Close Fullscreen" className="ml-4 mt-4 text-xl sm:text-4xl mr-auto text-enchilada-100 bg-enchilada-200 hover:bg-enchilada-900 hover:border-enchilada-900 rounded-lg p-1 transition-all duration-300" onClick={setHidden()} />
                        <h1 className="font-bold text-normal sm:text-xl text-center">{title}</h1>
                        <h3 className="text-sm text-center mb-2">{formattedDate}</h3>
                    </div>
                    <Image
                        className="object-scale-down max-h-[50vh] object-top p-3 relative mx-auto flex-shrink bg-black"
                        src={src}
                        alt={caption}
                        width={width}
                        height={height}
                        blurDataURL={lowResSrc}
                        placeholder="blur"
                        loading="lazy"
                    />
                    <figcaption className="max-h-1/5 p-4 mb-3 min-h-32 section-scroll relative">
                        {caption}
                    </figcaption>
                </figure>
            </div>
        )
        : null

    return content;
}
