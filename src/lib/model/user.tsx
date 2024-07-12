import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    id:String,
    username:String,
    location:String,
    email:String,
    phone:Number,
    companyName:String,
    role:String,
    gender:String,
    
})

export const User = mongoose.models.users || mongoose.model("users",userModel);