import { NextResponse } from "next/server";
import pool from "@/lib/neon/config";

export const POST = async (req) => {
    const { user_email, user_password } = await req.json();

    const thirtyDaysInSeconds = 30 * 24 * 60 * 60;

    try {
        const query = `
            SELECT *
            FROM users
            WHERE email = $1
            AND password = $2
            LIMIT 1
        `;

        const values = [
            user_email,
            user_password
        ];

        const result = await pool.query(query, values);

        const user = result.rows[0];

        if (user) {
            return new Response(
                JSON.stringify({
                    ...user,
                    found: true
                }),
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Set-Cookie": `session=${user_email}; Max-Age=${thirtyDaysInSeconds}; Path=/`
                    },
                    status: 200
                }
            );
        }

        return new Response(
            JSON.stringify({
                found: false
            }),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Set-Cookie": `session=false; Max-Age=${thirtyDaysInSeconds}; Path=/`
                },
                status: 200
            }
        );

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                message: "Error Logging In: " + error.message
            },
            { status: 500 }
        );
    }
};
