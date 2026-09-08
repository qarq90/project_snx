import { NextResponse } from "next/server";
import pool from "@/lib/neon/config";

export const POST = async (req) => {
    const { name, email } = await req.json();

    try {
        const query = `
            SELECT id
            FROM models
            WHERE name = $1
            AND email = $2
            LIMIT 1
        `;

        const values = [name, email];

        const result = await pool.query(query, values);

        return NextResponse.json({
            exists: result.rows.length > 0
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                message: "Error checking model: " + error.message
            },
            { status: 500 }
        );
    }
};
