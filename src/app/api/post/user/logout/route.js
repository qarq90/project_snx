import {NextResponse} from "next/server";

export const GET = async (req) => {
    try {
        return new Response("Session Ended", {
            headers: {
                "Content-Type": "application/json",
                "Set-Cookie": "session=false; Path=/;",
                "Location": "/auth"
            },
            status: 302
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'Error Logging In: ' + error});
    }
}