import React from 'react';
import './post.css';

function Post(props){
    console.log(props.selected);
    return(
            <div className={props.selected ? 'text-danger' : undefined } className="post" onClick={props.onClick}>
                <h3>{props.title}</h3>
                <img src={props.imgSource} />
                <p>{props.description}</p>
            </div>
    )
}

export default Post;