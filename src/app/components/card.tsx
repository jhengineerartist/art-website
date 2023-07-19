import Image, { StaticImageData } from 'next/image'
import Link from "next/link"

type Props = {
    cardImage: {
        src: StaticImageData
        blurUrl: string
        alt: string
    }
    title: string
    tags: string[]
    route: string
    textContent: string
}

export default function Card({ cardImage, tags, route, textContent }: Props) {
    return (
        <figure className="flex flex-col min-h-fit bg-white rounded shadow-lg">
            <div className='w-full h-96 relative '>
                <Image
                    className='object-cover'
                    src={cardImage.src}
                    blurDataURL={cardImage.blurUrl}
                    alt={cardImage.alt}
                    fill />
            </div>
            <figcaption className="flex flex-col justify-between min-h-1/3">
                <div className="px-6 py-4">
                    <h2 className="font-bold text-xl mb-2">The Coldest Sunset</h2>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </figcaption>
        </figure>
    )
}
