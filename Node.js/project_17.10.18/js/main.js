window.onload = function(){
    getData(`http://www.omdbapi.com/?s=predator&apikey=e3232cc1`)
    .then(
        movies => movies.forEach(movie => addMovie(movie))
    )
    .catch(
        err => console.log(err)
    );

    let go = document.getElementById('go');
    go.addEventListener('click', function search(){
    movieList.innerHTML='';    
    let search = document.getElementsByName('search')[0].value;
    getData(`http://www.omdbapi.com/?s=${search}&apikey=e3232cc1`)
.then(
    movies => movies.forEach(movie => addMovie(movie))
)
.catch(
    err => console.log(err)
);
    }, false)
    
}

let movieList = document.querySelector("#movies");

function getData(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            if (xhr.status == 200) {
                let data = JSON.parse(xhr.responseText);
                console.log(data.Search);
                resolve(data.Search);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.send();
    });
}



function addMovie(movie) {
    console.log(movie);
    let img = document.createElement('img');
    if (movie.Poster != "N/A"){
        img.src = movie.Poster;
        img.alt = movie.Title;
        movieList.appendChild(img);
    }

}


