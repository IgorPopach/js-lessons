import React from 'react';

function Image(props) {
    return (
        <div>
            <p>Image</p>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default Image;