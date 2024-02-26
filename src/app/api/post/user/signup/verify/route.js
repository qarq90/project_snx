import {NextResponse} from "next/server";
import connect from "@/lib/db";
import User from "@/models/User";

export const POST = async (req) => {
    const {signUpUserDetails} = await req.json();
    const {signupEmail, signupPassword, signupUsername, signupPhone} = signUpUserDetails;

    try {
        await connect()

        const user = await User.findOne({
            email: signupEmail,
        })

        if (user) {
            return new Response(JSON.stringify({found: true}), {
                headers: {
                    "Content-Type": "application/json",
                    "Set-Cookie": `session=false; path=/;`,
                },
                status: 200
            });
        } else {
            return new Response(JSON.stringify({signUpUserDetails, found: false}), {
                headers: {
                    "Content-Type": "application/json",
                    "Set-Cookie": `session=false; path=/;`,
                },
                status: 200
            });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'Error Creating Account: ' + error});
    }
}