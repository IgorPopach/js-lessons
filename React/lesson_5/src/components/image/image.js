import React from 'react';
import Radium from 'radium';

function Image(props) {
    const style = {
        margin: "10px auto",
        ":hover": {
            cursor: "pointer",
        }
    }
    return (
        <div onClick={props.onClick} style={style} >
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default Radium(Image);