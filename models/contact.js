const mongoose=require('mongoose');

const contactSchema=new mongoose.Schema({   // creating new schema
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

// to use our schema defination we need to convert it into model


const Contact=mongoose.model('Contact',contactSchema);
module.exports=Contact;
