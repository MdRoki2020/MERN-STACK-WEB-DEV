const { write } = require('fs');
const http=require('http');
const url=require("url");

const server=http.createServer((req,res)=>{
    
    var myURL="http://rabbil.com/blog.html?year=2020&month=july";

    var myURLobject=url.parse(myURL,true);

    var myHostName=myURLobject.host;
    var myPathName=myURLobject.pathname;
    var mySearchName=myURLobject.search;


    res.writeHead(200,{'content-Type':'text/html'});
    res.write(myHostName);
    res.end();
    
})

server.listen(5000);
console.log('server run success');