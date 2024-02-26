import {NextResponse} from "next/server";
import connect from "@/lib/db";
import User from "@/models/User";

export const POST = async (req) => {
    const {editedUserDetails} = await req.json();

    const {updateUserID, editedUsername, editedEmail, editedPassword, editedPhone,} = editedUserDetails;
    const {userId} = upadateUserID.userId;

    try {
        await connect();

        console.log(editedUserDetails)

        const updateCurrentUser = await User.updateOne({_id: userId}, {
            $set: {
                username: editedUsername,
                email: editedEmail,
                password: editedPassword,
                phone: editedPhone
            }
        });

        if (updateCurrentUser.modifiedCount > 0) {
            console.log("Account Updated Successfully");
            return NextResponse.json({found: true, message: 'Account Updated Successfully', user: editedUserDetails});
        } else {
            console.log("No matching document found to update");
            return NextResponse.json({found: false});
        }
    } catch (error) {
        console.log("Error Updating Account:", error);
        return NextResponse.json({message: 'Error Updating Account: ' + error});
    }
};
