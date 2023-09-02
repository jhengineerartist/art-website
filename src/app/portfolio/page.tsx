import { getAllArtData } from "@/lib/providers/artworkprovider";
import PortfolioView from "./components/portfolioview";

export default async function PortfolioPage() {
  const artworkData = await getAllArtData();

  artworkData.forEach(art => {
    const { info, } = art;
    console.log(info.src)
  })

  return (
    <main className="bg-panettone-300">
      <PortfolioView artworkData={artworkData} />
    </main>
  );
}
