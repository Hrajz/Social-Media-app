import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        await mongoose.connect(
          "mongodb+srv://hrajz:kHAGWAU28Tk3krJY@cluster0.y9pfqrx.mongodb.net/konnect"
        );
        console.log("MongoDb connected")
    } catch (error) {
        console.log("MongoDB connection error", error)
        process.exit(1);
    }
}

export default ConnectDB;