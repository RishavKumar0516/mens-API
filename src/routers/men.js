const express = require("express");
const router = new express.Router();

const MensRanking = require("../models/mens");


//we will handle post request
router.post("/mens", async (req, res)=>{
    try{
       
       const addingMensRecords = new MensRanking(req.body)
       console.log(req.body);
       const insertMens = await addingMensRecords.save();
       res.status(201).send(insertMens);

    }catch(err){
       res.status(400).send(err);
    }
})

//we will handle get request
router.get("/mens", async (req, res)=>{
    try{
       
       const getMens = await MensRanking.find({}).sort({"ranking":1});
       res.send(getMens);

    }catch(err){
       res.status(400).send(err);
    }
})

//we will handle get request of individuals
router.get("/mens/:id", async (req, res)=>{
    try{
       const _id = req.params.id;
       const getMen = await MensRanking.findById({_id:_id});
       //here first _id is the unique key name id stored in the documents and second _id is the id
       // we are getting here using req.params.id. it stores the value of id for which
       //we are searching.
       //when key and paramenter/value denoted by same name, then we write only key.
       res.send(getMen);

    }catch(err){
       res.status(400).send(err);
    }
})


//we will handle get request of individuals
router.get("/mens/:name", async (req, res)=>{
    try{
       const name = req.params.name;
       const getMen = await MensRanking.findOne({name:name});
       //here first _id is the unique key name id stored in the documents and second _id is the id
       // we are getting here using req.params.id. it stores the value of id for which
       //we are searching.
       //when key and paramenter/value denoted by same name, then we write only key.
       res.send(getMen);

    }catch(err){
       res.status(400).send(err);
    }
})


//we will handle patch request of individuals
router.patch("/mens/:id", async (req, res)=>{
    try{
       const _id = req.params.id;
       const updateMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
       	new:true
       });
       //here first _id is the unique key name id stored in the documents and second _id is the id
       // we are getting here using req.params.id. it stores the value of id for which
       //we are searching.
       //when key and paramenter/value denoted by same name, then we write only key.
       res.send(updateMen);

    }catch(err){
       res.status(500).send(err);
    }
})


//we will handle delete request of individuals
router.delete("/mens/:id", async (req, res)=>{
    try{
       const deleteMen = await MensRanking.findByIdAndDelete(req.params.id);
       //here first _id is the unique key name id stored in the documents and second _id is the id
       // we are getting here using req.params.id. it stores the value of id for which
       //we are searching.
       //when key and paramenter/value denoted by same name, then we write only key.
       res.send(deleteMen);

    }catch(err){
       res.status(500).send(err);
    }
})


module.exports = router;