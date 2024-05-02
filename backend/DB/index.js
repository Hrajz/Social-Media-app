import mongoose from "mongoose";
import "dotenv/config";

const ConnectDB = async () => {
    try {
        console.log(process.env.PORT);
        await mongoose.connect(`${process.env.DB_URI}/Konnect`);
        console.log("MongoDb connected")
    } catch (error) {
        console.log("MongoDB connection error", error)
        process.exit(1);
    }
}

export default ConnectDB;