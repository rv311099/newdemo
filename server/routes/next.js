const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
let ObjectId = mongoose.Types.ObjectId;

var Tasking = require("../models/tasking");

router.post("/:id",async(req,res,next) => {
    try{
        let task = await Tasking.create({
            _id:ObjectId(req.params.id),
            disc: req.body.disc                
        });
        res.json(task);
    }
    catch(e) {
        console.log("error in post of task",e.message, e.toString());
        res.json({message:"error",error:e.message});
    }
})

router.get("/:id",async(req,res,next) => {
    try {
        let tasks = await Tasking.findById({_id:ObjectId(req.params.id)});
        res.json(tasks);
    }
    catch(e) {
        console.log("error in get of task",e.message,e.toString());
        res.json({message: "error",error:e.message});
    }
})

router.delete("/:id", async(req,res,next) => {
    try {
        let task = await Tasking.deleteOne({_id:ObjectId(req.params.id)});
        res.json(task);
    }
    catch(e){
        console.log("error in port of task", e.message,e.toString());
        req.json({message:"error", error:e.message})
    }
});

router.put("/:id",async(req,res,next) => {
    try{
        let task = await Tasking.findOneAndUpdate({_id:ObjectId(req.params.id)},{
            disc: req.body.disc 
        },{upsert:false,new:true });
        res.json(task)
    }
    catch(e){
        console.log("error in put of task",e.message,e.toString());
        req.json({message:"error",error:e.message});
    }
})
// router.post("/:id",async(req,res,next) => {
//     try{
//         let task = await Tasking.create({
//             about: req.body.about                
//         });
//         res.json(task);
//     }
//     catch(e) {
//         console.log("error in post of task",e.message, e.toString());
//         res.json({message:"error",error:e.message});
//     }
// })

// router.get("/:id",async(req,res,next) => {
//     try {
//         let tasks = await Tasking.findById(ObjectId(req.params.id));
//         res.json(tasks);
//     }
//     catch(e) {
//         console.log("error in get of task",e.message,e.toString());
//         res.json({message: "error",error:e.message});
//     }
// })

// // router.get('/:id', function(req,res,next){
// //     Tasking.findById(req.params.id, function(err,cases){
// //         if(err) return next(err);
// //         res.json(cases);
// //     });
// // });

// router.delete("/:id", async(req,res,next) => {
//     try {
//         let task = await Tasking.deleteMany({_id:ObjectId(req.params.id)});
//         res.json(task);
//     }
//     catch(e){
//         console.log("error in port of task", e.message,e.toString());
//         req.json({message:"error", error:e.message})
//     }
// });

 module.exports = router;