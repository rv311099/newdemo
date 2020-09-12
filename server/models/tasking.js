const mongoose =require("mongoose");

const taskSchem = mongoose.Schema({
      disc:{
        type:String,
        require:false
    }
});
module.exports=mongoose.model('tasking',taskSchem);