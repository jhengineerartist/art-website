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
    <figure className="flex flex-col min-h-fit bg-white rounded max-w-lg lg:w-2/5 md:w-[40%] sm:w-3/4 m-4 duration-500 hover:scale-105 active:scale-95">
      <Link href={`/posts/${slug}`}>
        <div className="w-full h-96 relative">
          <Image
            className="object-cover"
            src={heroImage}
            alt={title}
            fill
          />
        </div>
        <figcaption className="flex flex-col h-fit">
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <p className="text-gray-700 text-base  ">
              {summary}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {tagElements}
          </div>
        </figcaption>
      </Link>
    </figure>
  );
}
