import React from 'react';
import CreateReactClass from 'create-react-class';
import Appitem from './../appitem/appitem';

const Applist = CreateReactClass({
    getInitialState () {
        return {
          
        };
      },
    render(){
        return (
            <div className="row justify-content-center">
                {this.props.notes.map((e,index) => {
                    return <Appitem key={e.id} id={e.id} name={e.name} text={e.text} color={e.color} defaultOpen = {index === 0} deleteNotes={() => this.props.deleteNotes(e)} />
                })}
            </div>
        )
    }
})

export default Applist;