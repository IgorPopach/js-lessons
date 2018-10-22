const fs = require('fs');
const path = require('path');
const pug = require('pug');
const GetSearch = require('../modules/GetSearch');
const AddMovie = require('../modules/AddMovie');
const axios = require('axios');



function home(req, res) {
    // if (req.method === 'POST') {
    //     console.log('Omg! 0_o')
    // }
    // res.setCode = 200;
    axios.get('http://www.omdbapi.com/?s=predator&apikey=e3232cc1')
    .then(response => {
        
        const Search = response.data.Search;
        console.log(Search[0]);
        let html = pug.renderFile('./views/index.pug', {
            Title: Search[0].Title,
            Year: Search[0].Year,
            imdbID: Search[0].imdbID,
            Type: Search[0].Type,
            Poster: Search[0].Poster,
        });

        res.writeHead(200,{ 'Content-Type': 'text/html' });
        res.end(html);
    })
    .catch(error => {
    console.log(error);
    });

    // const eventEmitter = require('events');
    // const emitter = new eventEmitter();
    // emitter.on('info', getPersonInfo);
    // if (true) {
    //     emitter.emit('info');
    // }

    // let go = document.getElementById('go');
    // go.addEventListener('click', function search(){
    // movieList.innerHTML='';    
    // let search = document.getElementsByName('search')[0].value;
    // axios.get(`http://www.omdbapi.com/?s=${search}&apikey=e3232cc1`)
    //     .then(response => {
    //         const Search = response.data.Search;
    //         console.log(Search[0]);
    //         let html = pug.renderFile('./views/index.pug', {
    //             Title: Search[0].Title,
    //             Year: Search[0].Year,
    //             imdbID: Search[0].imdbID,
    //             Type: Search[0].Type,
    //             Poster: Search[0].Poster,
    //         });
    //         res.writeHead(200,{ 'Content-Type': 'text/html' });
    //         res.end(html);
    //     })
    //     .catch(
    //         err => console.log(err)
    //     );
    // });
};

// function home(req, res) {
//     let Search = GetSearch();
//     console.log(GetSearch());
//     let html = pug.renderFile('./views/index.pug', {
//         Title: Search[0].Title,
//         Year: Search[0].Year,
//         imdbID: Search[0].imdbID,
//         Type: Search[0].Type,
//         Poster: Search[0].Poster,
//     });
//     res.writeHead(200,{ 'Content-Type': 'text/html' });
//     res.end(html);
// };

module.exports = home;