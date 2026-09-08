import { NextResponse } from "next/server";
import pool from "@/lib/neon/config";

export const POST = async (req) => {
    const { signUpUserDetails, found } = await req.json();

    const {
        signupEmail,
        signupPassword,
        signupUsername,
        signupPhone
    } = signUpUserDetails;

    const thirtyDaysInSeconds = 30 * 24 * 60 * 60;

    try {
        const query = `
            INSERT INTO users (
                email,
                password,
                username,
                phone
            )
            VALUES (
                $1,
                $2,
                $3,
                $4
            )
            RETURNING *
        `;

        const values = [
            signupEmail,
            signupPassword,
            signupUsername,
            signupPhone
        ];

        const result = await pool.query(query, values);

        const user = result.rows[0];

        return new Response(
            JSON.stringify({
                user,
                message: "Account Created"
            }),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Set-Cookie": `session=${signupEmail}; Max-Age=${thirtyDaysInSeconds}; Path=/`
                },
                status: 201
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
