type BlogPost = {
  slug: string;
  title: string;
  heroImage: string;
  tags: string[];
  summary: string;
  content: string;
};

type FullScreenImageInfo = {
  src: string,
  alt: string,
  height: number,
  width: number,
  caption: string,
  hidden: boolean
}