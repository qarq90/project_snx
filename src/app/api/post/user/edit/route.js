import { NextResponse } from "next/server";
import pool from "@/lib/neon/config";

export const POST = async (req) => {

    const { editedUserDetails } = await req.json();

    const {
        updateUserID,
        editedUsername,
        editedEmail,
        editedPassword,
        editedPhone
    } = editedUserDetails;

    // updateUserID should contain { userId: "..." }
    const userId = updateUserID?.userId;

    if (!userId) {
        return NextResponse.json(
            { message: "User ID is missing" },
            { status: 400 }
        );
    }

    try {
        console.log(editedUserDetails);

        const query = `
            UPDATE users
            SET
                username = $1,
                email = $2,
                password = $3,
                phone = $4
            WHERE id = $5
            RETURNING *
        `;

        const values = [
            editedUsername,
            editedEmail,
            editedPassword,
            editedPhone,
            userId
        ];

        const updatedUser = await pool.query(query, values);

        if (updatedUser.rows.length > 0) {
            console.log("Account Updated Successfully");

            return NextResponse.json({
                found: true,
                message: "Account Updated Successfully",
                user: updatedUser.rows[0]
            });
        }

        console.log("No matching user found to update");

        return NextResponse.json({
            found: false,
            message: "User not found"
        });

    } catch (error) {
        console.error("Error Updating Account:", error);

        return NextResponse.json(
            {
                message: "Error Updating Account: " + error.message
            },
            { status: 500 }
        );
    }
};
