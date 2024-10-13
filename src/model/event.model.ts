import mongoose, { Schema, Document, Model } from 'mongoose';

interface IEvent extends Document {
    name?: string;
    content?: string;
    title?: string;
    topEvent?: boolean;
    location?: string;
    speaker?: string;
    picture?: string;
    speakerImage?: string;
    speakerLinkedln?: string;
    speakerBio?: string; // Ensure this matches the schema definition
    createdAt?: Date;
    updatedAt?: Date;
}

// Define the event schema
const EventSchema: Schema<IEvent> = new Schema({
    name: { type: String },
    picture: { type: String },
    content: { type: String },
    title: { type: String },
    topEvent: { type: Boolean },
    location: { type: String },
    speaker: { type: String },
    speakerImage: { type: String },
    speakerBio: { type: String }, // Ensure this matches the interface definition
    speakerLinkedln: { type: String },
}, { timestamps: true });

// Create the event model
const EventModel: Model<IEvent> = mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);

// Define the event service functions
export const createEvent = (event: Partial<IEvent>) => EventModel.create(event);
export const fetchEvent = (pipeline: any) => EventModel.aggregate([pipeline]);
export const fetchEventById = (id: string) => EventModel.findById(id);
export const deleteEvent = (id: string) => EventModel.findByIdAndDelete(id);
