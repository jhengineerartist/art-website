import Image from "next/image"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { getBlogDataBySlug } from "@/lib/mdprovider/placeholderprovider"


export default function BlogPage({ params }: { params: { slug: string } }) {
    const bp: BlogPost = getBlogDataBySlug(params.slug) as BlogPost
    return (
        <article className='flex'>
            <div className=''>
                <Image
                    className='object-cover relative'
                    src={bp.heroImage}
                    alt={bp.title}
                    fill />
            </div>
            <div className='mx-auto prose lg:prose-xl prose-h3:text-enchilada-100 text-enchilada-100'>
                <ReactMarkdown>{bp.content}</ReactMarkdown>
            </div>
        </article>
    )
}