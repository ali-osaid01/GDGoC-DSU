import mongoose from 'mongoose';

export const connectDB = (async () => {
    try {
        const DB_URI = `mongodb+srv://gdscdsu:AiyrQd1U6Kyvq6kx@cluster0.8oxfztg.mongodb.net/dsugdsc?retryWrites=true&w=majority&appName=Cluster0`;
        const conn = await mongoose.connect(DB_URI);
        console.log(`MongoDB Connected -> : ${conn.connection.name}`);

    } catch (error:any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
});
