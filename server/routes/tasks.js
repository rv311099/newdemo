const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
let ObjectId = mongoose.Types.ObjectId;

var Tasks = require("../models/Tasks");
//var Tasking = require("../models/tasking");
router.post("/",async(req,res,next) => {
    try{
        let task = await Tasks.create({
            title: req.body.title,
            description:req.body.description,
            password:req.body.password 
                
        });
        res.json(task);
    }
    catch(e) {
        console.log("error in post of task",e.message, e.toString());
        res.json({message:"error",error:e.message});
    }
})
// router.post("/",async(req,res,next) => {
//     try{
//         let task = await Tasks.create({
//             disc: req.body.disc      
//         });
//         res.json(task);
//     }
//     catch(e) {
//         console.log("error in post of task",e.message, e.toString());
//         res.json({message:"error",error:e.message});
//     }
// })

// router.post("name/:id",async(req,res,next) => {
//     try{
//         let task = await Tasking.create({
//             _id:ObjectId(req.params.id),
//             disc: req.body.disc                
//         });
//         res.json(task);
//     }
//     catch(e) {
//         console.log("error in post of task",e.message, e.toString());
//         res.json({message:"error",error:e.message});
//     }
// })

// router.get("name/:id",async(req,res,next) => {
//     try {
//         let tasks = await Tasking.findById({_id:ObjectId(req.params.id)});
//         res.json(tasks);
//     }
//     catch(e) {
//         console.log("error in get of task",e.message,e.toString());
//         res.json({message: "error",error:e.message});
//     }
// })

// router.delete("/:id", async(req,res,next) => {
//     try {
//         let task = await Tasking.deleteOne({_id:ObjectId(req.params.id)});
//         res.json(task);
//     }
//     catch(e){
//         console.log("error in port of task", e.message,e.toString());
//         req.json({message:"error", error:e.message})
//     }
// });

router.put("/:id",async(req,res,next) => {
    try{
        let task = await Tasks.findOneAndUpdate({_id:ObjectId(req.params.id)},{
            title:req.body.title,
            description:req.body.description,
            password:req.body.password
        },{upsert:false,new:true });
        res.json(task)
    }
    catch(e){
        console.log("error in put of task",e.message,e.toString());
        req.json({message:"error",error:e.message});
    }
})

router.get("/",async(req,res,next) => {
    try {
        let tasks = await Tasks.find();
        res.json(tasks);
    }
    catch(e) {
        console.log("error in get of task",e.message,e.toString());
        res.json({message: "error",error:e.message});
    }
})

 router.get("/:id",async(req,res,next) => {
    try {
        let tasks = await Tasks.findById({_id:ObjectId(req.params.id)});
        res.json(tasks);
    }
    catch(e) {
        console.log("error in get of task",e.message,e.toString());
        res.json({message: "error",error:e.message});
    }
})

router.delete("/:id", async(req,res,next) => {
    try {
        let task = await Tasks.deleteOne({_id:ObjectId(req.params.id)});
        res.json(task);
    }
    catch(e){
        console.log("error in port of task", e.message,e.toString());
        req.json({message:"error", error:e.message})
    }
});

module.exports = router;
