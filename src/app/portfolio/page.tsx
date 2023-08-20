import getAllArtData from "@/lib/artprovider/artworkprovider"
import PortfolioView from "./components/portfolioview";


export default async function PortfolioPage() {
    const artworkData: ArtworkInfo[] = await getAllArtData();

    return (
        <main className="bg-panettone-300">
            <PortfolioView artworkData={artworkData} />
        </main >
    )
}
