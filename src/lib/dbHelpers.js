import {v4 as uuidV4} from "uuid";
import path from "path";
import fs from "fs";

export const saveImage = async (imageData) => {
    const imageBuffer = Buffer.from(imageData.replace(/^data:image\/\w+;base64,/, ''), 'base64');
    const uniqueFilename = `image_${uuidV4()}`;
    const imagePath = path.join(process.cwd(), 'public', 'images', 'generated', `${uniqueFilename}.png`);
    const dbPath = `/images/generated/${uniqueFilename}.png`

    await fs.writeFile(imagePath, imageBuffer, (err) => {
        if (err) {
            return null;
        }
    });
    return dbPath
}