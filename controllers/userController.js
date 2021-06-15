const User=require("../models/user_model");
const express=require("express");
const router=express.Router();
let alert = require('alert');  




exports.homepage=(req,res,next)=>{

    res.render("homepage",

        {
            title:"Insert User Details"

        });
};



exports.editDetails=(req,res,next)=>{

    const name = req.body.name;
    const email = req.body.email;
    const mobile= req.body.mobile;
    const city = req.body.city;
   User.findOneAndUpdate(
        {
            _id: req.params.id
        },
            {
                $set: {
                    name:name,
                        email:email,
                        mobile:mobile,
                        city:city
                }
            },
        {
            new: true
        },
    (err, result)=>{
       if(!err) {
           res.redirect("/api/people");
       }
    }
    );
};

exports.fetchDetails=(req,res,next)=> {

   let id = req.params.id;

   let  edit = User.findById(id);
    edit.exec(function (err, data) {
        if (err) throw err;
        res.render('detailsUpdate', {records: data});
    });
};



exports.deleteDetails=(req,res,next)=>{

    var id=req.params._id;
    var del=User.findByIdAndDelete(id);
    del.exec(function(err){
        if(err)throw err;
        res.redirect("/api/people");
    });

};







exports.showcase=(req,res,next)=>{


   User.find().then((result)=>{
       res.render("showcase",{

           user:result,
           path:"showcase",
           title:"Details"

       })
   }).catch(err=>{

       res.render("404",{
           title:"Error",
       });
   });

};










exports.register=(req,res,next)=>{
   
    const{name,email,mobile,city }=req.body;

   
    let errors=[];

    //check required fields
    if(!name || !email){
        errors.push({msg:'Please fill in at least name and emails fields'});
    }

    if(errors.length>0){
        res.render('homepage',{
            errors,
            name,email,mobile,city
        });
    }

      else{
                    const newUser=new User({
                        name,
                        email,
                        mobile,
                        city
                    });
        newUser.save()
            .then(user=>{
                alert("New User Registered Successfully")
                res.render('homepage');
            })
            .catch(err=>console.log(err));


                }



}
