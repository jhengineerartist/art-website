"use client";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
type Params = {
  postData: BlogPost;
};

export default function PostView({ postData }: Params) {
  const { title, heroImage, content } = postData;


  const markdownComponents: object = {
    p: (paragraph: { node?: any; children?: any }) => {
      // metastring parsing logic simply taken from the blog post:
      // https://amirardalan.com/blog/use-next-image-with-react-markdown
      const { node, children } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const metastring = image.properties.alt;
        const title = metastring?.match(/{title: (.*?)}/)?.pop();
        const width = metastring?.match(/{width: (.*?)}/)?.pop() as number;
        const height = metastring?.match(/{height: (.*?)}/)?.pop() as number;
        const isPriority = metastring?.toLowerCase().match("{priority}");
        const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

        return (
          <div>
            <Image
              className="hover:ring focus:ring ring-enchilada-600 duration-300"
              src={image.properties.src}
              width={width}
              height={height}
              alt={caption}
              priority={isPriority}
            />
          </div>
        );
      } else {
        return <p>{children}</p>;
      }
    },
  };

  return (
    <article className="flex flex-col justify-around w-full">
      <div className="mx-auto bg-enchilada-100 prose max-lg:prose-base min-w-1/2 lg:prose-2xl relative p-6 prose-h3:text-enchilada-600 text-enchilada-600">
        <figure className="items-center mx-auto w-full max-h-screen h-128 max-lg:h-64 relative">
          <Image
            className="object-contain object-top hover:ring focus:ring ring-enchilada-600 duration-300"
            src={heroImage}
            alt={title}
            fill
          />
        </figure>
        <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
      </div>
    </article>
  );
}
