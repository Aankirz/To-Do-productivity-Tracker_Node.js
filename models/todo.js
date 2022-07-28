//require the library
const mongoose=require('mongoose');

// creating the db schema
const toDoSchema=mongoose.Schema({
    //task-- for Description
    task:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    
});

// creating the model
const Todo=mongoose.model('Todo',toDoSchema);

//Finally export this model
module.exports=Todo;
