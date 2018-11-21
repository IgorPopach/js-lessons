import React from 'react';

export default function Appitem(props) {
    console.log(props.color);

    const divStyle =   {backgroundColor: props.color}
    const textStyle =   {height: "auto"}                
    return (
        <div className="col-12 col-sm-6 col-lg-3" style={divStyle}>
            <h3>{props.name}</h3>
            <p style={textStyle}>{props.text}</p>
        </div>
    )
}