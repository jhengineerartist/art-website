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
  caption: string,
  hidden: boolean
}