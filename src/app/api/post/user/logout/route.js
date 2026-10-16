import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const response = NextResponse.redirect(
            new URL("/auth", "http://localhost:3000")
        );

        response.cookies.set("session", "", {
            maxAge: 0,
            path: "/"
        });

        return response;

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                message: "Error Ending Session: " + error.message
            },
            { status: 500 }
        );
    }
};
