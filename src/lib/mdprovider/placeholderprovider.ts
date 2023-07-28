import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()

export default function getAllPostsData() {
    // Get file names under /posts
    const placeholderPath = path.join(root, 'public', 'placeholders', 'posts')
    const fileNames = fs.readdirSync(placeholderPath)

    const allPostsData = fileNames.map(file => {
        const filePath = path.join(placeholderPath, file)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents)

        const slug = data.title.toLowerCase()
            .replaceAll(' ', '-')
            .replaceAll(/[^a-z0-9-_]/g, '');

        return {
            slug,
            title: data.title,
            heroImage: data.heroimage,
            content: content
        }
    })
    return allPostsData
}
// TODO: Super unoptimal, replace this with a more considered data organization
export function getBlogDataBySlug(slug: string) {
    const bp: BlogPost[] = getAllPostsData();
    return bp.find(blog => blog.slug === slug)
}