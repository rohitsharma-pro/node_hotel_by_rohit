const express=require('express');
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const db=require('./db');
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');

app.listen(3000,()=>{
    console.log("Listening on the port 3000");
});

app.get('/',function(req,res){
    res.send("Hi , Welcome To our hotal , How can we help you sir");
});

//---------------for send and get data-------------------

app.use('/person',personRoutes);
app.use('/menu',menuRoutes);