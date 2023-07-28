import { getBlogDataBySlug } from "@/lib/mdprovider/placeholderprovider";
import PostView from "./components/PostView";

export default function BlogPage({ params }: { params: { slug: string } }) {
    const bp: BlogPost = getBlogDataBySlug(params.slug) as BlogPost;

    return (
        <main className="bg-enchilada-200">
            <PostView postData={bp} />
        </main>
    );
}
