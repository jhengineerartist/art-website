import { getBlogDataBySlug } from "@/lib/providers/blogprovider";
import PostView from "./components/postview";

export default function BlogPage({ params }: { params: { slug: string } }) {
  const bp: BlogPost = getBlogDataBySlug(params.slug) as BlogPost;

  return (
    <main className="bg-enchilada-200">
      <PostView postData={bp} />
    </main>
  );
}
