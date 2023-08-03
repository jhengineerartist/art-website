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
    const [fullScrImage, setFullScrImage] = useState<FullScreenImageInfo>({ src: "", alt: "", caption: "", hidden: true });

    const hideFullScreen = (hide: boolean) => {
        console.log('hiding')
        return () => setFullScrImage({ ...fullScrImage, hidden: hide })
    }

    const makeFullScreen = (imageInfo: FullScreenImageInfo) => {
        console.log('making fullscreen')
        return () => setFullScrImage(imageInfo)
    }

    const markdownComponents: object = {
        p: (paragraph: { node?: any, children?: any }) => {
            // metastring parsing logic simply taken from the blog post:
            // https://amirardalan.com/blog/use-next-image-with-react-markdown
            const { node, children } = paragraph
            if (node.children[0].tagName === "img") {
                const image = node.children[0]
                const metastring = image.properties.alt
                const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
                const width = metastring?.match(/{width: (.*?)}/)?.pop()
                const height = metastring?.match(/{height: (.*?)}/)?.pop()
                const isPriority = metastring?.toLowerCase().match('{priority}')
                const caption = metastring?.match(/{caption: (.*?)}/)?.pop()

                return (
                    <div className="">
                        <Image
                            src={image.properties.src}
                            width={width}
                            height={height}
                            className=""
                            alt={alt}
                            priority={isPriority}
                            onClick={makeFullScreen({ src: image.properties.src, alt: alt, caption: caption, hidden: false })}
                        />
                    </div>)
            }
            else {
                return (
                    <p>
                        {children}
                    </p>)
            }
        }
    }

    return (
        <article className="flex flex-col justify-around w-full" >
            <div className="mx-auto bg-enchilada-100 prose max-lg:prose-base min-w-1/2 lg:prose-2xl relative p-6 prose-h3:text-enchilada-600 text-enchilada-600">
                <figure className="items-center mx-auto w-full max-h-screen h-128 max-lg:h-64 relative">
                    <Image
                        className="object-contain object-top duration-500 hover:scale-105"
                        src={heroImage}
                        alt={title}
                        fill
                        onClick={makeFullScreen({ src: heroImage, alt: title, caption: "hero image", hidden: false })}
                    />
                </figure>
                <ReactMarkdown children={content} components={markdownComponents} />
            </div>
            <FullScreenImage {...{ info: fullScrImage, hideFullScreen: hideFullScreen }} />
        </article >
    )
}
