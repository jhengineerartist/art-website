import fs from "fs";
import path from "path";
import http from "http";
import { readDatabaseArtInfo, readLocalArtInfo } from "./backendprovider";
import { getPlaiceholder } from "plaiceholder";

export async function getAllArtData(): Promise<ArtworkData[]> {
    const getArtwork = async () => {
        try {
            return await readDatabaseArtInfo();
        } catch (error) {
            console.error(error);
            return await readLocalArtInfo();
        }
    }

    const artworkInfo = await getArtwork();

    // Read all the default artwork image data stored in the local javascript file
    const artInfoTemp = await Promise.all(artworkInfo.map(async info => {
        // Check if the source is a local file or a URL
        console.log(`${info.src} \n`);
        const buffer = fs.readFileSync(path.join("./public", info.src));
        // Get the Plaiceholder metadata for the image blur effects
        const {
            base64,
            metadata: { height, width },
        } = await getPlaiceholder(buffer, { size: 10 });
        return { info, height, width, base64 };
    }));

    return artInfoTemp;
}

export async function getArtworkById(id: number) {
    const allArt = await getAllArtData();
    return allArt.find(({ info }) => info.id === id);
}