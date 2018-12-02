import React from 'react';
import Appitem from './../appitem/appitem';

class Applist extends React.Component{
    componentWillUpdate(){
        console.log('componentWillUpdate Applist')
    }
    onDelete = (e) => this.props.deleteNotes(e);
    onChange = (e) => this.props.changeNotes(e);
    render(){
        console.log('this.props', this.props)
        return(
            <div className="row justify-content-center">
                {this.props.notes.map((e,index) => (
                    <Appitem key={e.id} id={e.id} title={e.title} text={e.text} color={e.color} defaultOpen={index === 0} deleteNotes={this.onDelete} changeNotes={this.onChange}/>
                ))}
            </div>
        )
    }
}

export default Applist;