import getAllArtData from "@/lib/artprovider/artworkprovider"
import Image from "next/image";
import PortfolioView from "./components/PortfolioView";

export default function PortfolioPage() {
    const artworkData: ArtworkInfo[] = getAllArtData();

    return (
        <main className="bg-panettone-300">
            <PortfolioView artworkData={artworkData} />
        </main >
    )
}
