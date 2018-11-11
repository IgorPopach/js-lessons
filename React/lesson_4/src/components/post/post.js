import React from 'react';

function Post(props){
    return(
            <div className={props.selected ? 'text-danger' : undefined } onClick={props.onClick}>
                <h3>{props.title}</h3>
                <img src={props.imgSource} />
                <p>{props.description}</p>
            </div>
    )
}

export default Post;