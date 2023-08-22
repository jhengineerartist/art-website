import fs from "fs";
import path from "path";
import { getPlaiceholder } from "plaiceholder";

const root = process.cwd();

export async function getAllArtData(): Promise<ArtworkData[]> {
    // Obtain the json data from the "backend"
    const artworkPath = path.join(root, "public", "artwork");
    const artworkJsonPath = path.join(artworkPath, "artworkinfo.json");
    const { artworkInfo }: { artworkInfo: ArtworkInfo[] } = JSON.parse(
        fs.readFileSync(artworkJsonPath, "utf-8"),
    );
    const artInfoTemp = await Promise.all(artworkInfo.map(async info => {
        const buffer = fs.readFileSync(path.join("./public", info.src));
        const {
            base64,
            metadata: { height, width },
        } = await getPlaiceholder(buffer, { size: 10 });
        return { info, height, width, base64 };
    }));

    return artInfoTemp;
}



export async function getArtworkById(id: number) {
    // This is a naive approach, eventually do a query against the backend
    const allArt = await getAllArtData();
    return allArt.find(({ info }) => info.id === id);
}
