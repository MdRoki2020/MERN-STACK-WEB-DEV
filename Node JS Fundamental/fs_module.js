const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{

    if(req.url=='/'){
        fs.readFile('Home.html',(err,data)=>{
            res.writeHead(200,{'contain-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
    
})

server.listen(5050);
console.log('server run success');