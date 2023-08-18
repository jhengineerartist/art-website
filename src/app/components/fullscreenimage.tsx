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
        src: "",
        title: "",
        caption: "",
        height: 0,
        width: 0,
        date: "",
        class: "GalleryPiece",
        related: [],
        tags: []
    },
        false]);

    const hideFullScreen = () => {
        console.log('hiding')
        return () => setFullScrImage([fullScrImage[0], false])
    }

    const showFullScreen = (imageInfo: ArtworkInfo) => {
        console.log('making fullscreen')
        return () => setFullScrImage([imageInfo, true])
    }

    return [fullScrImage, showFullScreen, hideFullScreen]
}

export function FullScreenImage(params: Params) {
    const { state, hideFullScreen: setHidden } = params;
    const [{ src, width, height, caption }, isFullScreen] = state;
    console.log(width)
    const closeRef = useRef<HTMLElement>(null);

    // Put a listener for when the user clicks somewhere,
    // determine what object was clicked, and if it wasn't the ref object then
    // close the fullscreen image view
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            console.log(`handleClickOutside ${event.target}`);
            assertEventTargetIsNode(event.target);
            if (closeRef.current && !closeRef.current.contains(event.target)) {
                setHidden()();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [closeRef]);

    const content = isFullScreen
        ? (
            <div className="aspect-w-16 aspect-h-9 flex justify-center items-center">
                <figure ref={closeRef} className="flex flex-col rounded-md my-auto bg-panettone-100 justify-center fixed z-10 max-w-5xl max-h-[80vh] top-1/2 left-1/2 -translate-x-1/2 drop-shadow-2xl h-fit w-[80%]">
                    <div>
                        <FaTimes className="m-4 text-2xl text-lilprince-900 hover:text-lilprince-100 h-8" onClick={setHidden()} />
                    </div>
                    <Image
                        className="object-scale-down drop-shadow-2xl max-h-[60vh] object-top p-3 relative"
                        src={src}
                        alt={caption}
                        width={width}
                        height={height}
                    />
                    <figcaption className="h-1/5 p-3 mb-3 overflow-y-scroll relative">
                        {caption}
                    </figcaption>
                </figure>
            </div>
        )
        : null

    return content;
}
