import { NextResponse } from "next/server";
import pool from "@/lib/neon/config";

export const POST = async (req) => {
    const { savedObj } = await req.json();

    const {
        email,
        backgroundColor,
        modelType,
        decalsData,
        modelColor,
        name,
        desc,
        sizeType,
        scale,
        snapshot
    } = savedObj;

    try {
        // Check if model already exists
        const selectQuery = `
            SELECT id
            FROM models
            WHERE name = $1
            AND email = $2
            LIMIT 1
        `;

        const selectValues = [name, email];

        const existingModel = await pool.query(
            selectQuery,
            selectValues
        );

        if (existingModel.rows.length > 0) {

            // Update existing model
            const updateQuery = `
                UPDATE models
                SET
                    scale = $1,
                    snapshot = $2,
                    "sizeType" = $3,
                    "modelType" = $4,
                    "decalsData" = $5::jsonb,
                    "modelColor" = $6,
                    "backgroundColor" = $7,
                    "updatedAt" = CURRENT_TIMESTAMP
                WHERE id = $8
            `;

            const updateValues = [
                scale,
                snapshot,
                sizeType,
                modelType,
                JSON.stringify(decalsData || []),
                modelColor,
                backgroundColor,
                existingModel.rows[0].id
            ];

            await pool.query(updateQuery, updateValues);

        } else {

            // Insert new model
            const insertQuery = `
                INSERT INTO models (
                    email,
                    name,
                    "desc",
                    scale,
                    snapshot,
                    "sizeType",
                    "modelType",
                    "decalsData",
                    "modelColor",
                    "backgroundColor"
                )
                VALUES (
                    $1,
                    $2,
                    $3,
                    $4,
                    $5,
                    $6,
                    $7,
                    $8::jsonb,
                    $9,
                    $10
                )
            `;

            const insertValues = [
                email,
                name,
                desc,
                scale,
                snapshot,
                sizeType,
                modelType,
                JSON.stringify(decalsData || []),
                modelColor,
                backgroundColor
            ];

            await pool.query(insertQuery, insertValues);
        }

        return NextResponse.json({
            message: "Model was Saved"
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                message: "Error Saving Model: " + error.message
            },
            { status: 500 }
        );
    }
};
