import React from 'react';

function Post(props){
    const post = props.location.properties

    const styles = {
        info: {
            fontSize: '14px',
            fontStyle: 'italic',
        }
    }

    return(
        <div className='bcg-style' >
            <h1>{post.title}</h1>
            <p style={ styles.info } >{post.author}</p>
            <p style={ styles.info } >{post.date}</p>
            <p>{post.desc}</p>
        </div>

    )
}

export default Post;