import { NextResponse } from "next/server";
import pool from "@/lib/neon/config";

export const POST = async (req) => {
    const { savedFeedback } = await req.json();

    const {
        firstName,
        lastName,
        email,
        feedback
    } = savedFeedback;

    try {
        const query = `
            INSERT INTO reviews (
                "firstName",
                "lastName",
                email,
                feedback
            )
            VALUES (
                $1,
                $2,
                $3,
                $4
            )
        `;

        const values = [
            firstName,
            lastName,
            email,
            feedback
        ];

        await pool.query(query, values);

        return NextResponse.json({
            message: "Review sent"
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                message: "Error Sending Review: " + error.message
            },
            { status: 500 }
        );
    }
};
