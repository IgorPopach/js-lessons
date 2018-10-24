const http = require('http');
const content = require('./routes/content');
const home = require('./routes/home');
const search = require('./routes/search');
const notFound = require('./routes/notFound');

http.createServer((req, res) => {
    if (req.url.match(/\.(html|css|js|png|eot|ico|svg|ttf|woff|woff2)$/)) {
        content(req, res);
    }
    else if (req.url === '/') {
        home(req, res);
    }
    else if (req.url === '/search') {
        search(req,res);
    }
    else {
        notFound(req,res);
    }

    // console.log(req.url);

}).listen('80', () => console.log('running...'));