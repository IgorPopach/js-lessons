const http = require('http');
const content = require('./routes/content');
const home = require('./routes/home');

http.createServer((req, res) => {
    // console.log('user want to see ', req.url);
    if (req.url.match(/\.(html|css|js|png|eot|ico|svg|ttf|woff|woff2)$/)) {
        content(req, res);
    }
    else if (req.url === '/') {
        
        home(req, res);
    }

    // console.log(req.url);

}).listen('80', () => console.log('running...'));

