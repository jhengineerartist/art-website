import fs from "fs";
import path from "path";
import { generateLowResImage, getImageMetadata } from "../utils/imageutils";

type ArtworkInfoJsonData = {
    artwork: ArtworkInfo[]
}

const root = process.cwd();

export default async function getAllArtData() {
    const artworkPath = path.join(root, "public", "artwork")
    const artworkJsonPath = path.join(artworkPath, "artworkinfo.json");
    const artworkData: ArtworkInfoJsonData = JSON.parse(fs.readFileSync(artworkJsonPath, "utf-8"));

    // Create the "public/lowres" directory if it doesn't exist
    const lowResDir = path.join(root, "public", "lowres");
    if (!fs.existsSync(lowResDir)) {
        fs.mkdirSync(lowResDir);
    }
    // Make all src files relative to the public directory
    const artworkInfo = await Promise.all(artworkData.artwork.map(async (info: ArtworkInfo) => {

        const metadata = await getImageMetadata(path.join(artworkPath, info.src))

        const lowResImagePath = path.join(lowResDir, path.basename(info.src));

        if (metadata.width !== info.width || metadata.height !== info.height) {
            console.error(`Artwork metadata is incorrectly represeted for ${info.src} in json: [mdata w: ${metadata.width}]
             vs json w: ${info.width}], [mdata h: ${metadata.height}] vs json h: ${info.height}]`)
        }

        // Check if the low-resolution image already exists
        if (!fs.existsSync(lowResImagePath)) {
            await generateLowResImage(
                path.join(artworkPath, info.src),
                lowResImagePath,
                Math.floor(info.width / 100),
                Math.floor(info.height / 100)
            );
        }
        info.src = path.join("/artwork", info.src)
        info.lowResSrc = path.join("/lowres", path.basename(info.src));
        return info;
    }));
    return artworkInfo;
}