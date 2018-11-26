import React from 'react';
import CreateReactClass from 'create-react-class';
import Appitem from './../appitem/appitem';

const Applist = CreateReactClass({
    getInitialState () {
        return {
          
        };
    },
    componentWillUpdate(){
        console.log('componentWillUpdate Applist')
    },
    render(){
        return (
            <div className="row justify-content-center">
                {this.props.notes.map((e,index) => {
                    return <Appitem key={e.id} id={e.id} title={e.title} text={e.text} color={e.color} defaultOpen = {index === 0} deleteNotes={() => this.props.deleteNotes(e)} />
                })}
            </div>
        )
    }
})

export default Applist;