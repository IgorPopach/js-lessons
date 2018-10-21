

function AddMovie(movie) {
    console.log(movie);
    let movieList = document.querySelector("#movies");
    let img = document.createElement('img');
    if (movie.Poster != "N/A"){
        img.src = movie.Poster;
        img.alt = movie.Title;
        movieList.appendChild(img);
    }
}

module.exports = AddMovie;