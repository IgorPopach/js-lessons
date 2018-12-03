import React from 'react';

class BlogItem extends React.Component{
    postHandlerItem = () => {
        const properties = this.props
        const pathName = this.props.pathName;
        const itemPath = pathName + '/' + this.props.id;
        this.props.postHandler(itemPath,properties);
    }
    render(){
        return(
            <div className='col-12' onClick={this.postHandlerItem}>
                <h1>{this.props.title}</h1>
                {/* <p>{this.props.author}</p>
                <p>{this.props.date}</p>
                <p>{this.props.desc}</p> */}
            </div>

        )
    }
}

export default BlogItem;