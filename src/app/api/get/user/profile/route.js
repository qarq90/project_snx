import {NextResponse} from "next/server";
import connect from "@/lib/db";
import User from "@/models/User";

export const POST = async (req) => {
    const {email} = await req.json();

    try {
        await connect()
        const currentUser = await User.findOne().where({email: email});
        return NextResponse.json({currentUser: currentUser});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'Error Creating Account: ' + error});
    }
}