import fs from "fs";
import path from "path";

type ArtworkInfoJsonData = {
    artwork: ArtworkInfo[]
}

const root = process.cwd();

export default function getAllArtData(): ArtworkInfo[] {
    const artworkJsonPath = path.join(root, "public", "artwork", "artworkinfo.json");
    const artworkData: ArtworkInfoJsonData = JSON.parse(fs.readFileSync(artworkJsonPath, "utf-8"));

    // Make all src files relative to the public directory
    const artworkInfo = artworkData.artwork.map((info: ArtworkInfo) => {
        info.src = path.join("/artwork", info.src)
        return info;
    });

    return artworkInfo;
}