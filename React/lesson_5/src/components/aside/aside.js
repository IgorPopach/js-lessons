import React from 'react';
import Radium from 'radium';

function Aside(props){
    const styles = {
        img: {
            maxWidth: "150px",
            marginBottom: "10px",
        },
        text: {
            fontSize: "14px",
            color: "yellow",
            textAlign: "justify"
        },
        textTitle: {
            fontSize: "14px",
            textTransform: "uppercase",
            color: "yellow",
        }
    }
    return(
            <div>
                <p style={styles.textTitle} >{props.title}</p>
                <img src={props.src} alt={props.alt} style={styles.img} />
                <div style={styles.text} >{props.description}</div>
            </div>
    )
}

export default Radium(Aside);