import mongoose from 'mongoose'

export default async function connect() {
	if (mongoose.connections[0].readyState) {
		return;
	}
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log(error);
		console.log("Failed to connect to MongoDB");
		throw error
	}
}
