const mongoose=require('mongoose');

const person_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    work:{
        type:String,
        required:true,
        enum:['chef','waiter','manager'],
    },
    phone_no:{
        type:String,
        required:true,
    },
    email_id:{
        type:String,
        required:true,
        unique:true
    },
    address:{
       type:String,
       required:true,
    },
    salary:{
        type:Number,
        required:true,
    }
})

const person=mongoose.model('person',person_schema);
module.exports=person;