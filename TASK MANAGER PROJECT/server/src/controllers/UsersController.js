const UserModel=require('../models/UsersModel');
const jwt=require('jsonwebtoken');

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


//Login
exports.login=(req,res)=>{
    let reqBody=req.body;

    UserModel.aggregate([
        {$match:reqBody},
        {$project:{_id:0,email:1,firstName:1,lastName:1,mobile:1,photo:1}}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            if(data.length>0){
                let payload={exp:Math.floor(Date.now()/1000)+(24*60*60),data:data[0]['email']}
                let token=jwt.sign(payload,'SecretKey123456789');
                res.status(200).json({status:"success",token:token,data:data[0]})
            }else{
                res.status(401).json({status:"unauthorized"})
            }
        }
    })
}


//user profile update
exports.profileUpdate=(req,res)=>{
    let email=req.headers['email'];
    let reqBody=req.body;

    UserModel.updateOne({email:email},reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}