import {NextResponse} from "next/server";
import connect from "@/lib/db";
import User from "@/models/User";

export const POST = async (req) => {
    const {signUpUserDetails, found} = await req.json();
    const {signupEmail, signupPassword, signupUsername, signupPhone} = signUpUserDetails;
    const thirtyDaysInSeconds = 30 * 24 * 60 * 60; // 30 days in seconds

    const cookieOptions = {
        'Max-Age': thirtyDaysInSeconds,
        path: '/',
    };

    try {
        await connect()

        const user = await User.create({
            email: signupEmail,
            password: signupPassword,
            username: signupUsername,
            phone: signupPhone,
        })

        return new Response(JSON.stringify({user, message: "Account Created"}), {
            headers: {
                "Content-Type": "application/json",
                "Set-Cookie": `session=true; Max-Age=${cookieOptions['Max-Age']}; path=${cookieOptions.path}`,
            },
            status: 201
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'Error Creating Account: ' + error});
    }
}