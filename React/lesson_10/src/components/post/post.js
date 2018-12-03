import React from 'react';

class Post extends React.Component{
    render(){
        console.log('this.props',this.props)
        return(
            <div>
                <p>Work!!!!!</p>
                <h1>{this.props.title}</h1>
                <p>{this.props.author}</p>
                <p>{this.props.date}</p>
                <p>{this.props.desc}</p>
            </div>

        )
    }
}

export default Post;