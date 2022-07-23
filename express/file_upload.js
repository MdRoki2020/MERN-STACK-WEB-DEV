var express=require('express');
var multer=require("multer")
var app=express();


var storage=multer.diskStorage({
    destination:(req,file,callBack)=>{
        callBack(null,'./uploads');
    },
    filename:(req,file,callBack)=>{
        callBack(null,file.originalname)
    }
})


var upload=multer({storage:storage}).single('myfile')


app.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            res.send("file upload fail");
        }else{
            res.send("file upload success");
        }
    })
})

app.listen(5000,()=>{
    console.log('server run success');
})