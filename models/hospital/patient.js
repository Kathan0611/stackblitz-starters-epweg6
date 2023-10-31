import monogoose from "mongoose";

const patientRecordSchema= new monogoose.Schema({
     name:{
       type:String,
       required:true
     },
       diagonsedWith:{
         type:String,
       },
       address:{
         type:String,
         require:true
       },
       age:{
         type:Number,
         required:true
       },
       bloodgroup:{
         type :String,
         require:true
       },
       gender:{
         type:String,
         enmu:["M","F","O"]
       },
       admitted:{
         type:monogoose.Schema.Types.ObjectId,
         ref:'Hospital'
       }

    
},{timestamps:true})


export const patient_record = monogoose.model("patient_record",patientRecordSchema);