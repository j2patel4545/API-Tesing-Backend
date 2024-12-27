import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const DatabaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI); // Use URL from .env file
        console.log("Database is Connected");
    } catch (error) {
        console.log("Database NOT Connected");
    }
};
