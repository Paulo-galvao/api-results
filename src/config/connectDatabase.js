import mongoose from "mongoose";
const cstr = process.env.MONGODB;

const connectDatabase = async () => {
    try {
        await mongoose.connect(cstr);
        console.log("<--> Connected to mongo db <-->")
    } catch (error) {
        console.log(error.message);
    }
} 

export default connectDatabase;