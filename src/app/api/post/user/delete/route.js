import { NextResponse } from "next/server";
import pool from "@/lib/neon/config";

export const POST = async (req) => {
    try {
        const { deleteUserID } = await req.json();

        if (!deleteUserID || !deleteUserID.userId) {
            return NextResponse.json(
                { message: "User ID is missing in the request" },
                { status: 400 }
            );
        }

        const { userId } = deleteUserID;

        const query = `
            DELETE FROM users
            WHERE id = $1
            RETURNING *
        `;

        const values = [userId];

        const deletedUser = await pool.query(query, values);

        if (deletedUser.rows.length > 0) {
            return NextResponse.json({
                user: deletedUser.rows[0],
                message: "Account Deleted"
            });
        }

        return NextResponse.json({
            found: false,
            message: "User not found or already deleted"
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                message: "Error Deleting Account: " + error.message
            },
            { status: 500 }
        );
    }
};
