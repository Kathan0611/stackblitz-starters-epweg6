import monogoose from "mongoose";

const medicalRecordSchema= new monogoose.Schema({
     
  
},{timestamps:true})


export const medical_record = monogoose.model("medical_record",medicalRecordSchema);