const express=require("express");
const libraryController=require("../controllers/userController");
const router=express.Router();
const User = require('../models/user_model');
router.get("/",libraryController.homepage);
router.get("/people",libraryController.showcase);
router.post("/people",libraryController.register);
router.get("/people/:id",libraryController.fetchDetails);
router.delete("/remove/:_id",libraryController.deleteDetails)
router.get("/remove/:_id",libraryController.deleteDetails);
router.post("/people/:id",libraryController.editDetails);




module.exports=router;


