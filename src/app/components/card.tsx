import Image from "next/image";
import Link from "next/link";

type Props = {
  blogPost: BlogPost;
};

export default function Card({ blogPost }: Props) {
  const { slug, heroImage, title, tags, summary } = blogPost;

  const tagElements = tags.map(tag => {
    return (
      <span className="inline-block bg-enchilada-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
        #{tag}
      </span>)
  })

  return (
    <figure className="flex flex-col bg-white rounded overflow-hidden max-w-lg w-full md:w-[40%] lg:w-[calc(100%/3)] m-4 duration-500 hover:scale-105 active:scale-95 flex-grow">
      <Link href={`/blog/${slug}`}>
        <div className="w-full h-96 relative">
          <Image
            className="object-cover"
            src={heroImage}
            alt={title}
            fill
          />
        </div>
        <figcaption className="flex flex-col p-4 mt-auto">
          <div>
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <p className="text-gray-700 text-base">{summary}</p>
          </div>
          <div>
            {tagElements}
          </div>
        </figcaption>
      </Link>
    </figure>
  );
}
