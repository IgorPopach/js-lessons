import React from 'react';
import Post from './../post/post';
import './aside.css'

function Aside(props){
    return(
            <div className="aside">
                <Post selected title={props.title} description={props.description} imgSource={props.imgSource}/>
            </div>
    )
}

export default Aside;