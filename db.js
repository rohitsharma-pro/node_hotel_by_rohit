const mongoose=require('mongoose');
const mongoURL="mongodb://localhost:27017/hotals";

mongoose.connect(mongoURL,{
      useNewUrlParser:true,
      useUnifiedTopology:true
});

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to MongoDb server");
})

db.on('disconnected',()=>{
    console.log("Disconnected From mongo Db server");
})

db.on('error',(err)=>{
    console.log("Mongo DB server error",err);
})

module.exports=db;