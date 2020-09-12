const mongoose =require("mongoose");

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:false
    },
    password:{
        type:String,
        require:false
    },
    disc:{
                type:String,
                require:false
            }

});
module.exports=mongoose.model('tasks',taskSchema);