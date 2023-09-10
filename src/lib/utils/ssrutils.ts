import { getPlaiceholder } from "plaiceholder"

// Image blurring
export async function getBase64ImageBlur(buffer: Buffer) {
    const {
        base64,
        metadata: { height, width },
    } = await getPlaiceholder(buffer, { size: 10 });
    return { base64, height, width };
}