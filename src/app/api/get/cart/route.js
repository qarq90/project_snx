import { NextResponse } from "next/server";
import pool from "@/lib/neon/config";

export const dynamic = "force-dynamic";

export const GET = async (req) => {
    try {
        const { searchParams } = req.nextUrl;
        const email = searchParams.get("email");

        if (!email) {
            return NextResponse.json(
                { message: "Email parameter is required" },
                { status: 400 }
            );
        }

        const query = `
            SELECT *
            FROM cart
            WHERE email = $1
            ORDER BY "createdAt" DESC
        `;

        const values = [email];

        const result = await pool.query(query, values);

        console.log(result.rows);

        return NextResponse.json({
            items: result.rows
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Error fetching cart items: " + error.message },
            { status: 500 }
        );
    }
};