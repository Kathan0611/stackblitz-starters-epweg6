import mongoose, { Mongoose } from "mongoose";

const userSchema =new mongoose.Schema({
     name:{
       type:String,
       required:true
     },
     
},{timestamps:true})

export const  User = mongoose.Model("User",userSchema)