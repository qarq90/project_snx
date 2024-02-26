import {NextResponse} from "next/server";
import connect from "@/lib/db";
import Model from "@/models/Model";
import {saveImage} from "@/lib/dbHelpers";
import fs from 'fs';
import path from 'path';

export const POST = async (req) => {
    const {savedObj} = await req.json();
    const {email,backgroundColor, modelType, decalsData, modelColor, name, desc, sizeType, scale, snapshot} = savedObj
    try {
        await connect()
        const data = await Model.find().where({name: name, email: email})

        if (data.length > 0) {
            await Model.updateOne({
                name: name,
                email: email,
            }, {
                scale: scale,
                snapshot: snapshot,
                sizeType: sizeType,
                modelType: modelType,
                decalsData: decalsData,
                modelColor: modelColor,
                backgroundColor: backgroundColor
            })
        } else {
            await Model.create({
                email: email,
                name: name,
                desc: desc,
                scale: scale,
                snapshot: snapshot,
                sizeType: sizeType,
                modelType: modelType,
                decalsData: decalsData,
                modelColor: modelColor,
                backgroundColor: backgroundColor
            })
        }

        return NextResponse.json({message: 'Model was Saved'});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'Error Saving Model: ' + error});
    }
}