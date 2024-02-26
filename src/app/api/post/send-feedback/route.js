
import {NextResponse} from "next/server";
import connect from "@/lib/db";
import Review from "@/models/Review";

export const POST = async (req) => {
    const {savedFeedback} = await req.json();

    const {firstName, lastName, email, feedback} = savedFeedback;
    try {
        await connect()

        await Review.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            feedback: feedback,
        })

        return NextResponse.json({message: 'Review sent'});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'Error Sending Review: ' + error});
    }
}
