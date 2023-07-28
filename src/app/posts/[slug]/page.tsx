import Image from "next/image"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { getBlogDataBySlug } from "@/lib/mdprovider/placeholderprovider"


export default function BlogPage({ params }: { params: { slug: string } }) {
    const bp: BlogPost = getBlogDataBySlug(params.slug) as BlogPost
    return (
        <main className="bg-enchilada-100">
            <article className='flex lg:flex-row max-lg:flex-col-reverse justify-around'>
                <div className='mx-auto prose max-lg:prose-base min-w-1/2 lg:prose-xl md:relative p-6 prose-h3:text-enchilada-600 text-enchilada-600'>
                    <ReactMarkdown>{bp.content}</ReactMarkdown>
                </div>
                <figure className='mt-8 items-center mx-auto w-1/2 max-h-fit max-lg:h-96 max-lg:w-full relative'>
                    <Image
                        className='object-contain object-top'
                        src={bp.heroImage}
                        alt={bp.title}
                        fill />
                </figure>
            </article>
        </main >
    )
}