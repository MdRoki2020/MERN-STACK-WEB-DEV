const express=require('express');
const router =express.Router();
const UsersController=require('../controllers/UsersController');
const AuthVerifyMiddleware=require('../middleware/AuthVerifyMiddleware');

router.post("/registration",UsersController.registration);
router.post("/login",UsersController.login);
router.post("/profileUpdate",AuthVerifyMiddleware,UsersController.profileUpdate);

module.exports=router;