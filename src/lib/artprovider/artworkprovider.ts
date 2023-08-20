import fs from "fs";
import path from "path";
import { generateLowResImage } from "../utils/imageutils";

type ArtworkInfoJsonData = {
    artwork: ArtworkInfo[]
}

const root = process.cwd();

export default async function getAllArtData() {
    const artworkJsonPath = path.join(root, "public", "artwork", "artworkinfo.json");
    const artworkData: ArtworkInfoJsonData = JSON.parse(fs.readFileSync(artworkJsonPath, "utf-8"));

    // Create the "public/lowres" directory if it doesn't exist
    const lowResDir = path.join(root, "public", "lowres");
    if (!fs.existsSync(lowResDir)) {
        fs.mkdirSync(lowResDir);
    }
    // Make all src files relative to the public directory
    const artworkInfo = await Promise.all(artworkData.artwork.map(async (info: ArtworkInfo) => {
        info.src = path.join("/artwork", info.src)

        const lowResImagePath = path.join(lowResDir, path.basename(info.src));
        info.lowResSrc = `/${lowResImagePath}`;

        // Check if the low-resolution image already exists
        if (!fs.existsSync(lowResImagePath)) {
            await generateLowResImage(
                `public/${info.src}`,
                lowResImagePath,
                20,
                20
            );
        }

        return info;
    }));

    return artworkInfo;
}