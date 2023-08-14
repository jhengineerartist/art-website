'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa"
import { assertEventTargetIsNode } from "@/lib/utils/asserts";

type Params = {
    state: [ArtworkInfo, boolean],
    hideFullScreen: () => () => void;
}

function FullScreenImage(params: Params) {
    const { state, hideFullScreen: setHidden } = params;
    const [{ src, width, height, caption }, hidden] = state;
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

    const content = !hidden
        ? (
            <figure ref={closeRef} className="flex flex-col rounded-md my-auto bg-panettone-100 justify-center fixed z-10 max-w-5xl max-h-[80%] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 drop-shadow-2xl h-fit w-[80%]">
                <FaTimes className="m-4 text-2xl text-lilprince-900 hover:text-lilprince-100 h-8" onClick={setHidden()} />
                <div className="relative">
                    <Image
                        className="object-scale-down drop-shadow-2xl object-top p-3"
                        src={src}
                        alt={caption}
                        width={width}
                        height={height}
                    />
                </div>
                <figcaption className="h-1/5 p-3 relative">
                    {caption}
                </figcaption>
            </figure>
        )
        : null

    return content;
}

export default FullScreenImage
