import { getBlogDataBySlug } from "@/lib/providers/blogprovider";
import PostView from "./components/postview";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const bp: BlogPost = getBlogDataBySlug(params.slug) as BlogPost;
  if (!bp) {
    return {
      title: "Not Found",
      description: "The page you're looking for does not exist."
    };
  }
  return {
    title: bp.title,
    description: bp.summary,
    alternates: {
      canonical: `/blog/${bp.slug}`
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: bp.title,
    //   description: bp.summary,
    //   siteId: '',
    //   creator: '@jhirshman',
    //   creatorId: '',
    //   images: [''],
    // },
  }
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const bp: BlogPost = getBlogDataBySlug(params.slug) as BlogPost;

  return (
    <main className="bg-enchilada-200">
      <PostView postData={bp} />
    </main>
  );
}
