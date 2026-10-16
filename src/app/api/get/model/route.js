import { NextResponse } from "next/server";
import pool from "@/lib/neon/config";

export const dynamic = "force-dynamic";

export const GET = async (req) => {
    try {
        const { searchParams } = req.nextUrl;
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { message: "ID parameter is required" },
                { status: 400 }
            );
        }

        const query = `
            SELECT *
            FROM models
            WHERE id = $1
            LIMIT 1
        `;

        const values = [id];

        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return NextResponse.json(
                { message: "Model not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(result.rows[0]);

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Error fetching model: " + error.message },
            { status: 500 }
        );
    }
};
