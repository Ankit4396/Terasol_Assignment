const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    }
});

const User=mongoose.model('User',userSchema);
module.exports=User;