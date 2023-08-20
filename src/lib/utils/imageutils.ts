
import sharp from "sharp";

export async function generateLowResImage(inputPath: string, outputPath: string, width: number, height: number) {
    await sharp(inputPath)
        .resize(width, height)
        .blur(10) // Apply blur effect
        .toFile(outputPath);
}

export async function getImageMetadata(imgPath: string) {
    return await sharp(imgPath).metadata()
}