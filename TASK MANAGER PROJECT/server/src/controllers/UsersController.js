const UserModel=require('../models/UsersModel');

//registration
exports.registration=(req,res)=>{
    let reqBody=req.body;
    UserModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


//profile Update
exports.profileUpdate=(req,res)=>{
    
}