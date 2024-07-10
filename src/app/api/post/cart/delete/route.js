import {NextResponse} from "next/server";
import connect from "@/lib/db";
import Cart from "@/models/Cart";

export const POST = async (req) => {
    const {email, id} = await req.json();
    try {
        await connect();
        const res = await Cart.deleteOne({email: email, _id: id})
        return NextResponse.json({message: 'Cart was saved'});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: 'Error saving item into cart: ' + error.message});
    }
};
