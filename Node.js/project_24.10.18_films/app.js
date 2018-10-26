const http = require('http');
const content = require('./routes/content');
const home = require('./routes/home');
const search = require('./routes/search');
const notFound = require('./routes/notFound');
const url = require('url');

http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (req.url.match(/\.(html|css|js|png|eot|ico|svg|ttf|woff|woff2)$/)) {
        content(req, res);
    }
    else if (req.url === '/') {
        home(req, res);
    }
    else if (parsedUrl.pathname === '/search') {
        search(req,res);
    }
    else {
        notFound(req,res);
    }

}).listen('80', () => console.log('running...'));