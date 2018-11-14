import React from 'react';

function Image(props) {
    return (
        <div onClick={props.onClick}>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default Image;