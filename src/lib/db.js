import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI

export default async function connect() {
    if (mongoose.connections[0].readyState) {
        return;
    }
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
        console.log("Failed to connect to MongoDB");
        throw error
    }
}
