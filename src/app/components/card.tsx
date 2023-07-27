import Image from 'next/image'
import Link from "next/link"

type Props = {
    blogPost: BlogPost
}

export default function Card({ blogPost }: Props) {
    console.log(blogPost.heroImage)
    return (
        <figure className='flex flex-col min-h-fit bg-white rounded max-w-lg lg:w-2/5 md:w-[40%] sm:w-3/4 m-4 duration-500 hover:scale-105'>
            <Link href={`/posts/${blogPost.slug}`}>
                <div className=' w-full h-96 relative'>
                    <Image
                        className='object-cover'
                        src={blogPost.heroImage}
                        alt={blogPost.title}
                        fill />
                </div>
                <figcaption className="flex flex-col h-fit">
                    <div className="px-6 py-4">
                        <h2 className="font-bold text-xl mb-2">The Coldest Sunset</h2>
                        <p className="text-gray-700 text-base  ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-enchilada-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-enchilada-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-enchilada-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#winter</span>
                    </div>
                </figcaption>
            </Link>
        </figure>
    )
}
