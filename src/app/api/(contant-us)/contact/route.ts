import { NextRequest } from "next/server";
import { connectDB } from "../../../../../config/database.config";
import { createMessage, fetchMessages } from "../../../../model/contact.model";
import { generateResponse } from "../../../../util/method";

export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const data = await fetchMessages();
        console.log(data);
        return generateResponse(data, "Messages fetched successfully", 200);
    } catch (error) {
        console.error("Error fetching messages:", error);
        return generateResponse(null, "Failed to fetch messages", 500);
    }
}

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const body = await request.json();
        
        if (!body.firstName || !body.lastName || !body.email || !body.message) {
            return generateResponse(null, "All fields are required", 400);
        }
        
        const message = await createMessage(body);
        return generateResponse(message, "Message sent successfully", 201);
    } catch (error) {
        console.error("Error creating message:", error);
        return generateResponse(null, "Failed to send message", 500);
    }
}
