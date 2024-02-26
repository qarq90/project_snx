import {NextResponse} from "next/server";
import connect from "@/lib/db";
import Model from "@/models/Model";

export const dynamic = 'force-dynamic'

export const GET = async (req) => {
    try {
        const {searchParams} = req.nextUrl
        const email = searchParams.get('user');
        await connect()
        const models = await Model.find({email}).sort({ createdAt: -1 }).limit(4);
        if (typeof models === 'object')
            return NextResponse.json({models: models});
        return NextResponse.json({models: models});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'Error Saving Model: ' + error});
    }
}