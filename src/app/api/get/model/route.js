import {NextResponse} from "next/server";
import connect from "@/lib/db";
import Model from "@/models/Model";

export const dynamic = 'force-dynamic'

export const GET = async (req) => {
    try {
        const {searchParams} = req.nextUrl
        const id = searchParams.get('id');
        await connect()
        const model = await Model.findOne({_id: id})
        return NextResponse.json({...model});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'Error Saving Model: ' + error});
    }
}