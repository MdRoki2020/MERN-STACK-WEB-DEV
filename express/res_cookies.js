const express= require('express');

const app=express();

app.get('/cookies',(req,res)=>{
    res.cookie('name' , 'roki');
    res.cookie('city' , 'rangpur');
    res.cookie('age' , '22');
    res.end('cookie set success');
})



app.get('/clearcookies',(req,res)=>{
    res.clearCookie('name');
    res.clearCookie('age');
    res.end('cookie set success');
})


app.listen(5000,()=>{
    console.log("Server Run Success");
})