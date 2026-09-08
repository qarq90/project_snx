import { NextResponse } from "next/server";
import pool from "@/lib/neon/config";

export const POST = async (req) => {
    const { email } = await req.json();

    try {
        const query = `
            SELECT *
            FROM users
            WHERE email = $1
            LIMIT 1
        `;

        const values = [email];

        const result = await pool.query(query, values);

        const currentUser = result.rows[0] || null;

        return NextResponse.json({
            currentUser
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Error fetching user: " + error.message },
            { status: 500 }
        );
    }
};
