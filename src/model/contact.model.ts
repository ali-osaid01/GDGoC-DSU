import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the interface for the Contact model
interface IContact extends Document {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    createdAt: Date;
}

// Define the Contact schema
const ContactSchema: Schema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    },
}, { timestamps: true });

// Create and export the Contact model
const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export const createMessage = (message: any) => (Contact as Model<IContact>).create(message);
export const fetchMessages = () => Contact.find().sort({ createdAt: -1 });
