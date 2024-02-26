import {NextResponse} from "next/server";
import connect from "@/lib/db";
import Model from "@/models/Model";

export const POST = async (req) => {
    const {name, email} = await req.json();
    try {
        await connect()
        const model = await Model.find({name, email})
        if (model.length > 0) {
            return NextResponse.json({exists: true});
        }
        return NextResponse.json({exists: false});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'Error Saving Model: ' + error});
    }
}