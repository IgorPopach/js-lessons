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
            <div className="row">
                {this.props.notes.map((e) => {
                    return <Appitem key={e.id} name={e.name} text={e.text} color={e.color} />
                })}
            </div>
        )
    }
})

export default Applist;