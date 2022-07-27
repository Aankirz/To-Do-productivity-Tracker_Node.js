const express=require('express');
const path=require('path');
const port=8000;

const db=require('./config/mongoose');
const Todo=require('./models/todo.js');
const app=express();


app.listen(port,function(err){
    if(err){
        console.log(err);
    }
   console.log(`Server is listening on port ${port}`);
})


//now connecting with mongodb using mongoose