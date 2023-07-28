'use client'
import Image from "next/image";

type Params = {
    src: string;
    alt: string;
    hidden: boolean;
    hideFullScreen: (hide: boolean) => () => void;
}

function FullScreenImage(params: Params) {
    const { src, alt, hidden, hideFullScreen: setHidden } = params;

    const content = !hidden
        ? (
            <figure className="flex flex-col rounded-md my-auto bg-panettone-100 justify-center fixed z-10 left-[10%] top-[5%] mx-auto drop-shadow-2xl w-4/5 h-[90%]">
                <div className="h-4/5 relative">
                    <Image
                        className="object-contain drop-shadow-2xl object-top p-3"
                        src={src}
                        alt={alt}
                        fill
                        onClick={setHidden(true)}
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
