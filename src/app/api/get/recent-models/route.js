import { NextResponse } from "next/server";
import pool from "@/lib/neon/config";

export const dynamic = "force-dynamic";

export const GET = async (req) => {
    try {
        const { searchParams } = req.nextUrl;
        const email = searchParams.get("user");

        if (!email) {
            return NextResponse.json(
                { message: "User parameter is required" },
                { status: 400 }
            );
        }

        const query = `
            SELECT *
            FROM models
            WHERE email = $1
            ORDER BY "createdAt" DESC
            LIMIT 4
        `;

        const values = [email];

        const result = await pool.query(query, values);

        return NextResponse.json({
            models: result.rows
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Error fetching models: " + error.message },
            { status: 500 }
        );
    }
};
