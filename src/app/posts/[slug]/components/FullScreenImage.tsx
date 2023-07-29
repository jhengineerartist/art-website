'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa"
import { assertEventTargetIsNode } from "@/lib/utils/asserts";

type Params = {
    src: string;
    alt: string;
    hidden: boolean;
    hideFullScreen: (hide: boolean) => () => void;
}

function FullScreenImage(params: Params) {
    const { src, alt, hidden, hideFullScreen: setHidden } = params;

    const closeRef = useRef(null);

    // Put a listener for when the user clicks somewhere,
    // determine what object was clicked, and if it wasn't the ref object then
    // close the fullscreen image view
    // useEffect(() => {
    //     const handleClickOutside = (event: Event) => {
    //         console.log(`handleClickOutside ${event.target}`);
    //         assertEventTargetIsNode(event.target);
    //         if (closeRef.current && closeRef.current.contains(event.target)) {
    //             setHidden(true)();
    //         }
    //     };
    //     document.addEventListener('click', handleClickOutside, true);
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside, true);
    //     };
    // }, [closeRef]);

    const content = !hidden
        ? (
            <figure className="flex flex-col rounded-md my-auto bg-panettone-100 justify-center fixed z-10 max-w-5xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 drop-shadow-2xl h-[80%] w-[80%]">
                <FaTimes className="m-4 text-4xl text-lilprince-900 hover:text-lilprince-200" onClick={setHidden(true)} />
                <div className="h-4/5 relative">
                    <Image
                        className="object-contain drop-shadow-2xl object-top p-3"
                        src={src}
                        alt={alt}
                        fill
                    />
                </div>
                <figcaption className="h-1/5 p-3 relative">
                    Hello World!
                </figcaption>
            </figure>
        )
        : <></>

    return content;
}

export default FullScreenImage
