// const fs = require('fs');
// const path = require('path');
const Request = require('../modules/request');
const Render = require('../modules/render');
const url = require('url');

function search(req,res) {
    const parsedUrl = url.parse(req.url, true);
    console.log(`req ${req}`);
    console.log(`parsedUrl ${parsedUrl}`);
    const title = parsedUrl.query.title;
    console.log(title);
    
    Request(title, (error, movie) => {
        Render('movies.html', movie, (error, html) => {
            console.log("movie -- " + movie);
            if(error) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end(res.message);
            }
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(html);
        })
    })

    // request(title, (error, movies) => {console.log(movies)})
    // console.log("movies working");
    // res.writeHead(200,{ 'Content-Type': 'text/html' });
    // const stream = fs.createReadStream(path.join(__dirname, '..', 'views', 'movies.html'));
    // stream.pipe(res);
}

module.exports = search;