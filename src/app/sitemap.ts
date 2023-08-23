import getAllPostsData from "@/lib/providers/blogprovider"

export default function sitemap() {
    const baseUrl = "https://jhirshman.art"
    const allPosts: BlogPost[] = getAllPostsData();
    const postUrls = allPosts?.map(bp => {
        return {
            url: `${baseUrl}/blog/${bp.slug}`,
            lastModified: new Date(),
        }
    }) ?? [];
    return [{
        url: baseUrl,
        lastModified: new Date(),
    },
    {
        url: `${baseUrl}/portfolio`,
        lastModified: new Date(),
    },
    {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
    },
    ...postUrls
    ]
}