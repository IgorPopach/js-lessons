const http = require('http');
const home = require('./routes/home');
const content = require('./routes/content');
http.createServer((req,res)=>{
    if (req.url.match(/\.(html|css|js|png|eot|svg|ttf|woff|woff2)$/)){
        content(req,res);
    }
    else if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end();
        return;
    }
    else if(req.url==='/'){
        home(req,res);
    }
    
console.log(req.url);

}).listen('80', () => console.log('working...'));