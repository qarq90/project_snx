import {NextResponse} from "next/server";
import connect from "@/lib/db";
import Cart from "@/models/Cart";

export const POST = async (req) => {
    const {email, name, img, type, price, quantity} = await req.json();
    try {
        await connect();

        const cartItem = new Cart({email, name, img, type, price, quantity});
        await cartItem.save();

        return NextResponse.json({message: 'Cart was saved'});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: 'Error saving item into cart: ' + error.message});
    }
};
