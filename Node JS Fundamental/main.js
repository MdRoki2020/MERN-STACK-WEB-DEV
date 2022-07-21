const http=require('http');

const server=http.createServer((req,res)=>{
    res.end('hello world');
})

server.listen(5000);
console.log('server run success');