//Require express for setting up the express server
const express=require('express');

const path=require('path');
//setting up the port number
const port=8000;

//importing the database
const db=require('./config/mongoose');
//importing the todo schema
const Todo=require('./models/todo');
//firing up the server
const app=express();

//setting up the view engine
app.set('view engine','ejs');
//setting up the path for the views
app.set('views','./views')

//To use encrypted data
app.use(express.urlencoded());
//To use the static files
app.use(express.static('assets'));

app.get('/',function(req,res){

Todo.find({},function(err,todos){
    if(err){
        console.log('Error in fetching todos from db');
        return;
    }
    return res.render('home',{
        title:'Todos',
        todos:todos
    })
  })
})
app.get('/delete-task',function(req,res){
     let id=req.query.id;
     Todo.findByIdAndDelete(id,function(err){
            if(err){
                console.log('Error in deleting the task');
                return;
            }
            return res.redirect('back');
     })
})
app.post('/create-todo',function(req,res){
     Todo.create({
        task:req.body.task,
        category:req.body.category,
        date:req.body.date
     },function(err,newTodo){
            if(err){
                console.log('Error in creating a todo');
                return;
            }
            console.log('*************',newTodo);
            return res.redirect('back');
     })})


app.listen(port,function(err){
    if(err){
        console.log(err);
    }
   console.log(`Server is listening on port ${port}`);
})


//now connecting with mongodb using mongoose