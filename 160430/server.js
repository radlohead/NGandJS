var http = require('http');
var fs = require('fs');
var i = 0;

http.createServer((req,res)=>{
    var userAgent = req.headers['user-agent'];
    console.log(userAgent);

    if(req.url === '/user') {
        res.writeHead('Content-Type', 'application/json');
        res.end(JSON.stringify({name: 'suho'}));
    }else if(req.url === '/write'){
        fs.writeFile('text'+(i++)+'.txt', i, 'utf8', err => {
            if(err) throw err;
        });
        res.writeHead('Content-Type', 'text/plain');
        res.end('saved');
    }else if(req.url === '/agent'){
        fs.appendFile('text.txt', '\n'+userAgent,
            'utf8', function(err){
               if(err) throw err;

                res.writeHead('Content-Type', 'text/plain');
                res.end('saved');
        });

    }
    else{
        res.writeHead('Content-Type', 'text/html');
        fs.readFile('src/index.html', 'utf8', function(err, data){
            if(err) throw err;
            res.end(data);
        });
    }
}).listen(8080);












