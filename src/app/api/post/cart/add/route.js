import { NextResponse } from "next/server";
import pool from "@/lib/neon/config";

export const POST = async (req) => {
    const {
        email,
        name,
        img,
        type,
        price,
        quantity
    } = await req.json();

    try {
        const query = `
            INSERT INTO cart (
                email,
                name,
                img,
                type,
                price,
                quantity
            )
            VALUES (
                $1,
                $2,
                $3,
                $4,
                $5,
                $6
            )
        `;

        const values = [
            email,
            name,
            img,
            type,
            price,
            quantity
        ];

        await pool.query(query, values);

        return NextResponse.json({
            message: "Cart was saved"
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                message: "Error saving item into cart: " + error.message
            },
            { status: 500 }
        );
    }
};
