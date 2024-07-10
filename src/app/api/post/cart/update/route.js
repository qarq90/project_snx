import {NextResponse} from "next/server";
import connect from "@/lib/db";
import Cart from "@/models/Cart";

export const POST = async (req) => {
    const {email, id, price, quantity} = await req.json();
    try {
        await connect();


        await Cart.updateOne({email: email, _id: id}, {$set: {quantity: quantity, price: price}})
        // await Cart.updateOne({email: email, _id: id}, {$set: {quantity: 1, price: 10}})

        console.log('...........................................................................')
        console.log(price, quantity)
        console.log('...........................................................................')

        return NextResponse.json({message: 'Cart was saved'});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: 'Error saving item into cart: ' + error.message});
    }
};
