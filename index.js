const express = require('express');
const path = require('path');
const port = 1010;

const db=require('./config/mongoose');
const Contact=require('./models/contact');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList = [
    // {
    //     name: "Vipul",
    //     phone: "11111"
    // },
    // {
    //     name: "verma",
    //     phone: "12345"
    // },
    // {
    //     name: "Stricker",
    //     phone: "56734"
    // }
]

// app.get('/practice', function(req, res){
//     return res.render('practice', {
//         title: "Let us play with ejs"
//     });
// });


app.get('/', function(req, res){


    Contact.find({},function(err,contacts){
        if(err)
        {console.log("error in fetching data from db to server",err); 
          return;}

          return res.render('home',{
            title: "Contact List",
            contact_list: contacts
        });
    })

   
})
app.post('/create-contact', function(req, res){
    
    // contactList.push(req.body);
    // return res.redirect('/');

    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err,newContact){
        if(err){console.log("Error in fetching contacts from db",err);return;}

        console.log("****",newContact);
        return res.redirect('back');
    });

});


app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})

// For deleting the contacts from db
app.get('/delete-contact/', function(req, res){
    console.log(req.query);
    let id = req.query.id; // get the id from query in the url

    // finding contacts in the database using id and delete it.
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error in deleting data from DB",err);
            return;
        }
    });
       return res.redirect('back');
});
