type ArtworkClass =
  | "GalleryPiece"
  | "Study"
  | "PleinAir"
  | "MinorWork"
  | "WorkInProgress";

type BlogPost = {
  slug: string;
  title: string;
  heroImage: ImageFields;
  summary: string;
  content: string;
  date: string;
  tags: string[];
};

type ArtworkInfo = {
  id: number;
  src: string;
  title: string;
  caption: string;
  class: ArtworkClass;
  date: string;
  tags: string[];
};

type ArtworkData = {
  info: ArtworkInfo,
  height: number,
  width: number,
  base64: string
}