type ArtworkClass =
  "GalleryPiece" |
  "Study" |
  "PleinAir" |
  "MinorWork" |
  "WorkInProgress"


type ImageInfo = {
  src: string,
  height: number,
  width: number,
  lowResSrc: string
}

type BlogPost = {
  slug: string;
  title: string;
  heroImage: ImageInfo;
  summary: string;
  content: string;
  date: string,
  tags: string[];
};

type ArtworkInfo = {
  id: number,
  data: ImageInfo,
  title: string,
  caption: string,
  class: ArtworkClass,
  date: string,
  related: number[]
  tags: string[]
}