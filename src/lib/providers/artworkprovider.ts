import fs from "fs";
import path from "path";
import { getBase64ImageBlur } from "../utils/ssrutils";
import { firebaseDB, firebaseStorage } from "./firebaseprovider";
import { ref as dbRef, get } from "firebase/database"
import { ref as storageRef, getDownloadURL } from "firebase/storage"

const root = process.cwd();

export async function getAllArtData(): Promise<ArtworkData[]> {

    const getArtworkInfo = () => {
        try {
            return readDBArtData();
        } catch (error) {
            console.error(error);
            return readLocalArtData();
        }
    }

    const getFileBuffer = async (src: string) => {
        try {
            // Fetch the image buffers for generation of base64 Plaiceholders
            const res = await fetch(src);
            return Buffer.from(await res.arrayBuffer())
        }
        catch (error) {
            console.error(error);
            // Fallback to local file storage. If this fails, then its ok
            // for the error to bubble up.
            return fs.readFileSync(path.join("./public", src));
        }
    }

    const artworkInfo = await getArtworkInfo();

    const artInfoTemp = await Promise.all(artworkInfo.map(async info => {

        const buffer = await getFileBuffer(info.src);

        const imgBlur = await getBase64ImageBlur(buffer);

        return { info, ...imgBlur };
    }));

    return artInfoTemp;
}

export async function getArtworkById(id: number) {
    // This is a naive approach, eventually do a query against the backend
    const allArt = await getAllArtData();
    return allArt.find(({ info }) => info.id === id);
}

async function readDBArtData(): Promise<ArtworkInfo[]> {
    const artRef = dbRef(firebaseDB, 'artwork');
    const snapshot = await get(artRef);
    const artworkInfo: ArtworkInfo[] = snapshot.exists() ? snapshot.val() : []

    const artworkInfoWithUrls = await Promise.all(artworkInfo.map(async info => {
        const fileRef = storageRef(firebaseStorage, info.src);
        info.src = await getDownloadURL(fileRef);
        return info;
    }));

    return artworkInfoWithUrls;
}

function readLocalArtData() {
    const artworkPath = path.join(root, "public", "artwork");
    const artworkJsonPath = path.join(artworkPath, "artworkinfo.json");
    const { artworkInfo }: { artworkInfo: ArtworkInfo[] } = JSON.parse(
        fs.readFileSync(artworkJsonPath, "utf-8"),
    );
    return artworkInfo;
}