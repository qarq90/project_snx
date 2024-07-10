import {NextResponse} from "next/server";
import Model from "@/models/Model.js"
import connect from "@/lib/db";

// export const dynamic = 'force-dynamic'

export const POST = async (request) => {
	try {
		const {modelType} = await request.json()

		await connect()

		let result = await Model.find(
			{
				modelType: modelType,
			})

		console.log(result)

		if (result) {
			return NextResponse.json({
				message: 'Models Fetched Successfully.',
				status: true,
				result: result
			})
		} else {
			return NextResponse.json({
				message: 'Failed to fetch Models.',
				status: false,
				result: result
			})
		}

	} catch (error) {
		console.log(error);
		return NextResponse.json({message: 'Error Saving Model: ' + error});
	}
}
