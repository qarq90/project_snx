import {NextResponse} from "next/server";
import {v4 as uuidV4} from 'uuid';
import * as path from "path";
import fs from 'fs'

export const POST = async (req) => {
    const {imageData} = await req.json();
    try {
        const imageBuffer = Buffer.from(imageData, 'base64');

        // Generate a unique filename
        const uniqueFilename = uuidV4(); // You can customize this further if needed

        // Define the path to save the image
        const imagePath = path.join(process.cwd(), 'public', 'images', 'generated', `${uniqueFilename}.png`);
        const dbPath = `/images/generated/${uniqueFilename}.png`

        fs.writeFile(imagePath, imageBuffer, (err) => {
            if (err) {
                console.error('Error saving image:', err);
                return NextResponse.json({message: 'Error Saving Model: ' + err});
            }
            console.log('Image saved successfully', dbPath);
        });

        return NextResponse.json({message: 'Model was Saved'});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'Error Saving Model: ' + error});
    }
}