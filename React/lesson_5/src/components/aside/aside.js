import React from 'react';
import Image from './../image/image';

function Aside(props){
    return(
            <div className="aside">
                <Image title={props.title} description={props.description} src={props.src} alt={props.alt} />
            </div>
    )
}

export default Aside;