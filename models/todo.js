// creating the db schema
const mongoose=require('mongoose');
const toDoSchema=mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
        
    },
    category:{
        type:String,
        required:true
    }
});

const Todo=mongoose.model('Todo',toDoSchema);

//Finally export this model
module.exports=Todo;
