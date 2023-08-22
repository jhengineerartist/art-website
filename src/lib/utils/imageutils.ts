import sharp from "sharp";
import { encode } from "blurhash";

export async function getImageBlurHash(imgPath: string) {
    console.log(`Getting image hash for ${imgPath}`)
    const image = sharp(imgPath);

    // Get the image width and height
    const { width, height } = await image.metadata();

    // Ensure the image buffer is in sRGB format
    const imageBuffer = await image.toColorspace('srgb').ensureAlpha().raw().toBuffer();

    // Convert the buffer to a Uint8ClampedArray
    const imageArray = new Uint8ClampedArray(imageBuffer);

    if (typeof width !== "number" || typeof height !== "number") {
        throw new Error("Unable to obtain image metadata");
    }

    // Encode the image using blurhash
    const blurhash = encode(imageArray, width, height, 4, 3);
    console.log(`got ${blurhash} for ${imgPath}`)
    return blurhash;
}