const express=require('express');
const path=require('path');
const port=8000;

const db=require('./config/mongoose');
const Todo=require('./models/todo');
const app=express();

app.set('view engine','ejs');
app.set('views','./views')

app.use(express.urlencoded());
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