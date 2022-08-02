const express=require('express');
const router =express.Router();
const UsersController=require('../controllers/UsersController');

router.post("/registration",UsersController.registration);
router.post("/profileUpdate",UsersController.profileUpdate);

module.exports=router;