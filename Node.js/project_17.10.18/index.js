const axios = require('axios');
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



function addMovie(movie) {
    console.log(movie);
    let img = document.createElement('img');
    if (movie.Poster != "N/A"){
        img.src = movie.Poster;
        img.alt = movie.Title;
        movieList.appendChild(img);
    }
}
