const http = require('http');
const content = require('./routes/content');
const home = require('./routes/home');
const about = require('./routes/about');
const err404 = require('./routes/err404');
const beware = require('./routes/beware');
const blog = require('./routes/blog');
const blogInside = require('./routes/blogInside');
const contacts = require('./routes/contacts');
const FAQ = require('./routes/FAQ');
const order = require('./routes/order');

http.createServer((req, res) => {
    // console.log('user want to see ', req.url);
    if (req.url.match(/\.(html|css|js|png|eot|ico|svg|ttf|woff|woff2)$/)) {
        content(req, res);
    }
    else if (req.url === '/') {
        home(req, res);
    }
    else if (req.url === '/about') {
        about(req, res);
    }
    else if (req.url === '/home') {
        home(req, res);
    }
    else if (req.url === '/err404') {
        err404(req, res);
    }
    else if (req.url === '/beware') {
        beware(req, res);
    }
    else if (req.url === '/blog') {
        blog(req, res);
    }
    else if (req.url === '/blogInside') {
        blogInside(req, res);
    }
    else if (req.url === '/contacts') {
        contacts(req, res);
    }
    else if (req.url === '/FAQ') {
        FAQ(req, res);
    }
    else if (req.url === '/order') {
        order(req, res);
    }

    // console.log(req.url);

}).listen('80', () => console.log('running...'));