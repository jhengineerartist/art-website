import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();

type BlogDataMap = {
  didFetch: boolean;
  posts: BlogPost[];
}

const blogData: BlogDataMap = {
  didFetch: false,
  posts: []
}

// Grabs and caches all the posts from disk
export default function getAllPostsData(): BlogPost[] {
  if (!blogData.didFetch) {
    console.log("Retrieving blog posts from the disk.")
    // Get file names under /posts
    const placeholderPath = path.join(root, "public", "placeholders", "posts");
    const fileNames = fs.readdirSync(placeholderPath);

    blogData.posts = fileNames.map((file) => {
      const filePath = path.join(placeholderPath, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      const slug = data.title
        .toLowerCase()
        .replaceAll(" ", "-")
        .replaceAll(/[^a-z0-9-_]/g, "");

      return {
        slug,
        title: data.title,
        heroImage: data.heroimage,
        tags: data.tags.split(','),
        summary: data.summary,
        content: content,
      };
    });

    blogData.didFetch = true;
  }

  return blogData.posts;
}

export function getBlogDataBySlug(slug: string) {
  const bp: BlogPost[] = getAllPostsData();
  return bp.find((blog) => blog.slug === slug);
}