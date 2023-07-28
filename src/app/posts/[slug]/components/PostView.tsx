'use client'
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useState } from "react";
import FullScreenImage from "./FullScreenImage";

type Params = {
    postData: BlogPost
}

export default function PostView({ postData }: Params) {
    const { title, heroImage, content } = postData;
    const [fullScrImage, setFullScrImage] = useState({ src: "", alt: "", hidden: true });

    const hideFullScreen = (hide: boolean) => {
        console.log('hiding')
        return () => setFullScrImage({ ...fullScrImage, hidden: hide })
    }

    const makeFullScreen = (src: string, alt: string) => {
        console.log('making fullscreen')
        return () => setFullScrImage({ ...fullScrImage, src, alt, hidden: false })
    }

    return (
        <article className="flex flex-col justify-around">
            <figure className="items-center mx-auto w-full max-h-screen h-128 max-lg:h-64 relative">
                <Image
                    className="object-contain object-top"
                    src={heroImage}
                    alt={title}
                    fill
                    onClick={makeFullScreen(heroImage, title)}
                />
            </figure>
            <div className="mx-auto bg-enchilada-100 prose max-lg:prose-base min-w-1/2 lg:prose-xl relative p-6 prose-h3:text-enchilada-600 text-enchilada-600">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            <FullScreenImage {...{ ...fullScrImage, hideFullScreen: hideFullScreen }} />
        </article>
    )
}
