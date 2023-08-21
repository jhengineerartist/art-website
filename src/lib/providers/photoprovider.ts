import fs from 'fs'
import path from 'path'
import { generateLowResImage, getImageMetadata } from '../utils/imageutils'

const root = process.cwd();

export async function getProfilePicture() {
    // Generate the low res placeholder profile picture
    const basePfpPath = "/jose_square_portrait.jpg"
    const baseLowResPfpPath = path.join("lowres", "jose_square_portrait.jpg")

    const pfpPath = path.join(root, "public", basePfpPath);
    const lowResPfpPath = path.join(root, "public", baseLowResPfpPath);

    const pfpMetadata = await getImageMetadata(pfpPath);

    if (!fs.existsSync(lowResPfpPath))
        await generateLowResImage(pfpPath, lowResPfpPath, Math.floor(pfpMetadata.width as number / 50), (pfpMetadata.height as number / 50))

    const pfpData = { src: path.join("/", basePfpPath), height: pfpMetadata.height, width: pfpMetadata.width, lowResSrc: path.join("/", baseLowResPfpPath) }
    return pfpData
}
