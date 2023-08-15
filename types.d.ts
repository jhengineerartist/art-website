type ArtworkClass =
  "GalleryPiece" |
  "Study" |
  "PleinAir" |
  "MinorWork" |
  "WorkInProgress"

type BlogPost = {
  slug: string;
  title: string;
  heroImage: string;
  summary: string;
  content: string;
  date: string,
  tags: string[];
};

type ArtworkInfo = {
  id: number,
  src: string,
  height: number,
  width: number,
  title: string,
  caption: string,
  class: ArtworkClass,
  date: string,
  related: number[]
  tags: string[]
}