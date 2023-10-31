import mongoose from  "mongoose";

const todoSchema= new mongoose.Schema({
 content:{
   type:String,
   reuired:true
 },
 complete:{
   type:Boolean,
   default:false
 },
 createdBy:{
   type:mongoose.Schema.Types.ObjectId,
   ref="User"
 },
 subTodos:[{
   type:mongoose.Schema.Types.ObjectId,
   ref:"Sub_Todo"
 }]
 
  
 
},{truestamp:true});

export const TODO=mongoose.model("TODO",todoSchema);