const mongoose=require('mongoose'); // require library

mongoose.connect('mongodb://localhost/contactList');  // connect to database.

const db=mongoose.connection;  // aquire the connection (to check if it is succesfull)


db.on('error',console.error.bind(console,"Error in connecting to Db"));  // if error in connnecting to Db


db.once('open',function(){
    console.log("Successfully connected to Db");       // up and running then print message.
});