const express=require("express");
const libraryController=require("../controllers/userController");
const router=express.Router();
const User = require('../models/user_model');
router.get("/",libraryController.homepage);
router.get("/api/people",libraryController.showcase);
router.post("/api/people",libraryController.register);
router.get("/api/people/:id",libraryController.fetchDetails);
router.delete("/api/remove/:_id",libraryController.deleteDetails)
router.get("/api/remove/:_id",libraryController.deleteDetails);
router.post("/api/people/:id",libraryController.editDetails);




module.exports=router;


