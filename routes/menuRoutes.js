const person = require('../models/person');
const menuItem=require('./../models/menuItem');
const express=require('express');
const router=express.Router();


router.post('/',async (req,res)=>{
    try
    {
        const menuData=req.body;
        const newMenuData=new menuItem(menuData);
        const response=await newMenuData.save();

        console.log("Menu Data Saved");
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});   
    }
})


router.get('/',async (req,res)=>{
    try
    {
        const menuData=await menuItem.find();

        console.log("Menu Data Fetching");
        res.status(200).json(menuData);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

router.get('/:tastes',async (req,res)=>{
    try
    {
         const tastes=req.params.tastes;
         if(tastes=="Spicy" || tastes=="Sweet" || tastes=="Sour")
         {
              const menuData=await menuItem.find({taste:tastes});
              console.log("Menu Data Fetching");
              res.status(200).json(menuData);
         }
         else
         {
              res.status(404).json({message:"Data Not Found"});
         }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

//------------------for data update--------------

router.put('/:id',async (req,res)=>{
    try
    {
        const update_menu_id=req.params.id;
        const update_menu_data=req.body;

        const update_menu_response=await menuItem.findByIdAndUpdate(update_menu_id,update_menu_data,{
            new:true,
            runValidators:true
        });

        console.log("Menu Data Fetching");
        res.status(200).json(update_menu_response);

        if(!update_menu_response)
        {
            res.status(404).json({message:"Data Not found"});
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});
    }
})
//--------------------fro data delete --------------------

router.delete('/:id',async (req,res)=>{
    try
    {
         const delete_menu_id=req.params.id;
         const delete_response=await menuItem.findByIdAndUpdate(delete_menu_id);

         console.log("Data deleted");
         res.status(200).json(delete_response);

         if(!delete_response)
         {
             res.status(404).json({error:"Not found"});
         }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
} )


//-------for only tranning purpose---------------
module.exports=router;