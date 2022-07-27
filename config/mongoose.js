//require the library
const mongoose=require('mongoose');
//error handling
main().catch(err=>console.log(err.message));

//connect to the database
async function main(){
    await mongoose.connect('mongodb://localhost:27017/To-Do-List_db')
}

//acquire the connection to check if it is connected or not
const db=mongoose.connection;

//error
db.on('error', function(err) { console.log(err.message); });

//up and running then print the message
db.once('open',function(){
    console.log('Successfully Connected to MongoDB');
})
