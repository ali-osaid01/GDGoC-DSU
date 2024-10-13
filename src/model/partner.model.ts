import mongoose, { Schema, Document } from 'mongoose';

interface IPartner extends Document {
    picture: string;
}

const partnerSchema: Schema = new Schema({
    picture: {
        type: String,
        required: true
    }
});

const Partner: mongoose.Model<IPartner> = mongoose.models.Partner || mongoose.model<IPartner>('Partner', partnerSchema);


export const createPartner = (obj:any) => Partner.create(obj);
export const fetchPartner = () => Partner.find();
export const deletePartner = (id:string) => Partner.findByIdAndDelete(id);
