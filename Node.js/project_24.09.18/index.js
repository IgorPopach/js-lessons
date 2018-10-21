const http = require('http');
const server = http.createServer();
server.on('request',(req, res) => {
    // console.log(req.url);
    const url = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36';
    if (url == req.headers['user-agent']) {
        res.writeHead(200, {"Content-Type":"text/html"});
    } else {
        res.writeHead(403, {"Access":"forbidden"});
    }    
    res.end(`
    <h1>Hello node.js server</h1>
    <div>
        <p>${req.connection.remoteAddress}!</p>
    </div>
    `)
})
server.listen('80', () => console.log("running..."));