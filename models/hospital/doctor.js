import mongoose from "mongoose";
import monogoose from "mongoose";

const doctorRecordSchema= new monogoose.Schema({
     name:{
       type:String,
       reuired:true
     },
     qualifiacation:{
       type:String,
       require:true
       },
      Fees:{
        type:String,
         required:true
      },
      experienceInYear:{
        type:Number,
        default:0
      },
      workInHospitals: 
      [ {
       
        type:mongoose.Schema.Types.ObjectId,
         ref:"Hospital"
    }
  ]

     
},{timestamps:true})


export const doctor_record = monogoose.model("doctor_record",doctorRecordSchema);