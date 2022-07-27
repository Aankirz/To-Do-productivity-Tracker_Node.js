const express=require('express');
const app=express();
const port=8000;





app.listen(port,(err)=>{
if(err){
    console.log(`Error:${err}`);
    return;
}
console.log(`Server is listening on port ${port}`);
})
