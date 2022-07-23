const express= require('express');

const app=express();

app.get('/download',(req,res)=>{
    res.download('./upload/3e214620afc07e831b0ca5fba9eedd33.jpg');
})


app.listen(5000,()=>{
    console.log("Server Run Success");
})