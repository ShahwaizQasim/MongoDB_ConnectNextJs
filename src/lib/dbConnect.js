import mongoose from "mongoose";


export default async function ConnectDB() {
    try {
        let connected;
        if (connected?.connection?.readyState != -1) {
            connected = await mongoose.connect(process.env.MONGODB_URL)
            console.log('DB Connected');
        }
    } catch (error) {
        console.log('error=>', error);
    }
}