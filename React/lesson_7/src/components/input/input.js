import React from 'react';

function Input(props) {
    return (
        <div className="row">
            <div className="col-4">
                <img src={props.src} alt={props.name}/>
            </div>
            <div className="col-8">
                <h3>{props.name}</h3>
                <p>{props.telNumber}</p>
                <p>{props.city}</p>
            </div>
        </div>
    )
}

export default Contact;