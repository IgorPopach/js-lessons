import React from 'react';

function Film(props) {
    return (
        <div className="col-12 col-sm-6 col-lg-3 poster">
            <h3>{props.title}</h3>
            <img src={props.src} alt={props.title} />
            <ul>
                <li><span>Type: </span>{props.type}</li>
                <li><span>Released: </span>{props.year}</li>
                <li><span>imdbID: </span>{props.imdb}</li>
            </ul>
        </div>
    )
}

export default Film;