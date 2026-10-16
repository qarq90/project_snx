import { NextResponse } from "next/server";
import pool from "@/lib/neon/config";

export const POST = async (req) => {
    const { signUpUserDetails } = await req.json();

    const {
        signupEmail,
        signupPassword,
        signupUsername,
        signupPhone
    } = signUpUserDetails;

    try {
        const query = `
            SELECT id
            FROM users
            WHERE email = $1
            LIMIT 1
        `;

        const values = [signupEmail];

        const result = await pool.query(query, values);

        if (result.rows.length > 0) {
            return new Response(
                JSON.stringify({ found: true }),
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Set-Cookie": "session=false; Path=/;"
                    },
                    status: 200
                }
            );
        }

        return new Response(
            JSON.stringify({
                signUpUserDetails,
                found: false
            }),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Set-Cookie": "session=false; Path=/;"
                },
                status: 200
            }
        );

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                message: "Error Creating Account: " + error.message
            },
            { status: 500 }
        );
    }
};
