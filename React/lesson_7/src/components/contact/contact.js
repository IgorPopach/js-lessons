import React from 'react';

function Contact(props) {
    return (
        <div className="row">
            <div className="col-4">
                <img src={props.src} alt={props.name} style={{"maxWidth": "-webkit-fill-available"}}/>
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