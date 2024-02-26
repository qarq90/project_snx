import { NextResponse } from "next/server";
import connect from "@/lib/db";
import User from "@/models/User";

export const POST = async (req) => {
    try {
        const { deleteUserID } = await req.json();

        if (!deleteUserID || !deleteUserID.userId) {
            return NextResponse.json({ message: "User ID is missing in the request" });
        }

        const { userId } = deleteUserID;

        await connect();

        const deletedUser = await User.deleteOne({ _id: userId });

        if (deletedUser.deletedCount > 0) {
            return NextResponse.json({ user: deletedUser, message: "Account Deleted" });
        } else {
            return NextResponse.json({ found: false, message: "User not found or already deleted" });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Error Deleting Account: ' + error });
    }
}
