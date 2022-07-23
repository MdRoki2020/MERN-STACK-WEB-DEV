const express= require('express');

const app=express();



app.get('/',(req,res)=>{
    res.send('<h1>Home</h1>');
})


app.use('/about',(req,res,next)=>{
    console.log('i am application level middleware');
    next();
})

app.get('/about',(req,res)=>{
    res.send('<h1>About</h1>');
})


app.get('/contact',(req,res)=>{
    res.send('<h1>Contact</h1>');
})


app.listen(5000,()=>{
    console.log("Server Run Success");
})