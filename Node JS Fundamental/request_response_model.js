const http=require('http');

const server=http.createServer((req,res)=>{
    
    if(req.url=="/"){

        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<h2>This Is Home page</h2>');
        res.end();

    }else if(req.url=='/about'){

        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<h2>This Is About page</h2>');
        res.end();

    }else if(req.url=='/contact'){

        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<h2>This Is Contact page</h2>');
        res.end();

    }
})

server.listen(5000);
console.log('server run success');