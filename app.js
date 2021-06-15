

const express =require('express');
const path = require('path');



const app  = express();
const libRoutes=require('./routes');
app.set('views',"views");
app.set('view engine','ejs');
const mongoose=require('mongoose');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

app.use("/api", libRoutes);

app.set('views',"views");
app.set('view engine','ejs');
const port= process.env.PORT || 3000;
mongoose.connect("mongodb://localhost:27017/UserDB",{ useNewUrlParser: true , useUnifiedTopology: true} ).then((result)=>{
    app.listen(port,function(){
        console.log('server'+port);
    });
    console.log("Database connected succesfully");
})
    .catch((err)=>{
        console.log("can't connect to database",err);
    });



