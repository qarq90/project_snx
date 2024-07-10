import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Cart from "@/models/Cart";

export const dynamic = 'force-dynamic';

export const GET = async (req) => {
    try {
        const { searchParams } = req.nextUrl;
        const email = searchParams.get('email');

        if (!email) {
            return NextResponse.json({ message: 'Email parameter is required' });
        }

        await connect();

            const cartItems = await Cart.find({ email }).sort({ createdAt: -1 });

        console.log(cartItems)

        if (Array.isArray(cartItems)) {
            return NextResponse.json({ items: cartItems });
        }

        return NextResponse.json({ items: [cartItems] });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Error fetching cart items: ' + error }, { status: 500 });
    }
}
