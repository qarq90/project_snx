import { NextResponse } from "next/server";
import pool from "@/lib/neon/config";

export const POST = async (request) => {
    try {
        const { modelType } = await request.json();

        const query = `
            SELECT *
            FROM models
            WHERE "modelType" = $1
            ORDER BY "createdAt" DESC
        `;

        const values = [modelType];

        const result = await pool.query(query, values);

        console.log(result.rows);

        if (result.rows.length > 0) {
            return NextResponse.json({
                message: "Models Fetched Successfully.",
                status: true,
                result: result.rows
            });
        }

        return NextResponse.json({
            message: "No models found.",
            status: false,
            result: []
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                message: "Error fetching models: " + error.message
            },
            { status: 500 }
        );
    }
};
