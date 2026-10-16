import { NextResponse } from "next/server";
import pool from "@/lib/neon/config";

export const POST = async (req) => {
    const { email, id } = await req.json();

    try {
        const query = `
            DELETE FROM cart
            WHERE email = $1
            AND id = $2
        `;

        const values = [email, id];

        await pool.query(query, values);

        return NextResponse.json({
            message: "Cart item was deleted"
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                message: "Error deleting item from cart: " + error.message
            },
            { status: 500 }
        );
    }
};
