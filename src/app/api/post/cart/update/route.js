import { NextResponse } from "next/server";
import pool from "@/lib/neon/config";

export const POST = async (req) => {
    const { email, id, price, quantity } = await req.json();

    try {
        const query = `
            UPDATE cart
            SET
                quantity = $1,
                price = $2,
                "updatedAt" = CURRENT_TIMESTAMP
            WHERE email = $3
            AND id = $4
        `;

        const values = [
            quantity,
            price,
            email,
            id
        ];

        await pool.query(query, values);

        console.log("...........................................................................");
        console.log(price, quantity);
        console.log("...........................................................................");

        return NextResponse.json({
            message: "Cart was updated"
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                message: "Error updating item in cart: " + error.message
            },
            { status: 500 }
        );
    }
};
