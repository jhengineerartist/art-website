import fs from "fs";
import path from "path";
import { generateLowResImage, getImageMetadata } from "../utils/imageutils";

type ArtworkInfoJsonData = {
    artwork: ArtworkInfo[]
}

const root = process.cwd();

export async function getAllArtData() {
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
        const metadata = await getImageMetadata(path.join(artworkPath, info.data.src))
        const lowResImagePath = path.join(lowResDir, path.basename(info.data.src));

        if (metadata.width !== info.data.width || metadata.height !== info.data.height) {
            console.error(`Artwork metadata is incorrectly represeted for ${info.data.src} in json: [mdata w: ${metadata.width}]
             vs json w: ${info.data.width}], [mdata h: ${metadata.height}] vs json h: ${info.data.height}]`)
        }

        // Check if the low-resolution image already exists
        if (!fs.existsSync(lowResImagePath)) {
            await generateLowResImage(
                path.join(artworkPath, info.data.src),
                lowResImagePath,
                Math.floor(info.data.width / 50),
                Math.floor(info.data.height / 50)
            );
        }
        info.data.src = path.join("/artwork", info.data.src)
        info.data.lowResSrc = path.join("/lowres", path.basename(info.data.src));
        return info;
    }));
    return artworkInfo;
}

export async function getArtworkById(id: number) {
    // This is a naive approach, eventually do a query against the backend
    const allArt = await getAllArtData();
    return allArt.find(art => art.id === id);
}