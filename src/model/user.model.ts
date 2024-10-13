import mongoose, { Model, Schema } from "mongoose";

interface IUser  {
  _id:string,
  
  fullname: string;
  email: string;
  password: string;
  otp: string;
  isLead: boolean;
  otpExpiry: Date;

  team:string;
  bio:string;
  role:string
  tagline:string
  createdAt: Date;
  updatedAt: Date;
}


const UserSchema: Schema = new Schema(
  {
    fullname: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    otp: {
      type: String,
    },
    otpExpiry:{
        type:Date,
    },
    role: {
      type: String,
      enum: ["Executive-core-team-member", "lead"],
    },
    tagline:{
      type:String
    },
    bio:{
      type:String
    },
    team:{
      type:String,
      enum:["operation","development","marketing"]
    },
    facebook:{
      type:String
    },
    instagram:{
      type:String
    },
    linkedin:{
      type:String
    },
    picture:{
      type:String
    },
    gmail:{
      type:String
    },
  },
  { timestamps: true,versionKey: false  }
);

const User:Model<IUser> = mongoose.models.user || mongoose.model<IUser>("user", UserSchema);


export const createUser = (obj: any) => User.create(obj);

export const findUser = (query: any) => User.findOne(query);

export const findTeam = (pipeline:any) => User.aggregate([pipeline])

export const deleteTeam = (id: string) => User.findByIdAndDelete(id);