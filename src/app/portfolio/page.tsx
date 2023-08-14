import getAllArtData from "@/lib/artprovider/artworkprovider"
import Image from "next/image";

export default function PortfolioPage() {
    const artInfo: ArtworkInfo[] = getAllArtData();

    const images = artInfo.map(artwork => {
        return (
            <figure className="bg-white ml-3 mb-3 p-3 group">
                <Image
                    className="object-scale-down mx-auto h-72 w-fit relative drop-shadow-2xl"
                    src={artwork.src}
                    width={artwork.width}
                    height={artwork.height}
                    alt={artwork.title}
                />
                <figcaption className="text-sm w-full hidden relative group-hover:inline truncate">{artwork.title}</figcaption>
            </figure>
        )
    });

    return (
        <main className="bg-panettone-300">
            <div className="min-h-screen">
                <h1 className="text-panettone-100 mx-auto p-3 text-4xl text-center">Portfolio</h1>
                <div className="flex flex-wrap content-center justify-center h-full w-full">
                    {images}
                </div>
            </div>
        </main >
    )
}
