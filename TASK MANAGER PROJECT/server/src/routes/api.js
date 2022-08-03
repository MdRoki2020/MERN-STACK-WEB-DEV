const express=require('express');
const router =express.Router();
const UsersController=require('../controllers/UsersController');
const TaskController=require('../controllers/TaskController');
const AuthVerifyMiddleware=require('../middleware/AuthVerifyMiddleware');

router.post("/registration",UsersController.registration);
router.post("/login",UsersController.login);
router.post("/profileUpdate",AuthVerifyMiddleware,UsersController.profileUpdate);


router.post("/createTask",AuthVerifyMiddleware,TaskController.createTask);
router.get("/deleteTask/:id",AuthVerifyMiddleware,TaskController.deleteTask);
router.post("/updateTaskStatus/:id/:status",AuthVerifyMiddleware,TaskController.updateTaskStatus);
router.get("/taskStatusCount/",AuthVerifyMiddleware,TaskController.taskStatusCount);


module.exports=router;