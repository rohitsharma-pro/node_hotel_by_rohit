const person=require('./../models/person');
const express=require('express');
const router=express.Router();

//----------------for data Saving -------------

router.post('/',async (req,res)=>{
    try
    {
         const personData=req.body;
         const newPersonData=new person(personData);
         const response=await newPersonData.save();

         console.log("Person Data Saved");
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
           const personData=await person.find();
           
           console.log("Data Fetching");
           res.status(200).json(personData);
      }
      catch(err)
      {
        console.log(err);
        res.status(500).json({errr:"Internal Server Error"});
      }
});

router.get('/:worktype',async (req,res)=>{
    try
    {
         const worktype=req.params.worktype;
         if(worktype=="chef" || worktype=="manager" || worktype=="waiter")
         {
            const personData=await person.find({work:worktype});

            console.log("Person Data Fetching");
            res.status(200).json(personData);
         }
         else
         {
            res.status(404).json({error:"Invalid Work Type"});
         }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

//-----------------for data update ----------------

router.put('/:id',async (req,res)=>{
    try
    {
        const person_id=req.params.id;
        const update_person=req.body;

        const update_person_data_reponse=await person.findByIdAndUpdate(person_id,update_person,{
            new:true,
            runValidators:true
        });

        console.log("Data Updating progress");
        res.status(200).json(update_person_data_reponse);

        if(!update_person_data_reponse)
        {
            res.status(404).json({messge:"Data Not Found"});
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Internal Server error"});
    }
})

//----------------for data delete ---------------------

module.exports=router;