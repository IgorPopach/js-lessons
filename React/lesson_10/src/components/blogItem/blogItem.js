import React from 'react';

class BlogItem extends React.Component{

    postHandlerItem = () => {
        const properties = this.props
        const pathName = this.props.pathName;
        const itemPath = pathName + '/' + this.props.id;
        this.props.postHandler(itemPath,properties);
    }

    render(){
        const style = {
            cursor: 'pointer',
            margin: '20px'
        }

        return(
            <div className='col-12' onClick={this.postHandlerItem} style={ style }>
                <h1>{this.props.title}</h1>
            </div>

        )
    }
}

export default BlogItem;