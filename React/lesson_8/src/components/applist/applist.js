import React from 'react';
import Appitem from './../appitem/appitem';

class Applist extends React.Component{
    componentWillUpdate(){
        console.log('componentWillUpdate Applist')
    }
    render(){
        console.log('this.props', this.props)
        return(
            <div className="row justify-content-center">
                {this.props.notes.map((e,index) => {
                    return <Appitem key={e.id} id={e.id} title={e.title} text={e.text} color={e.color} defaultOpen = {index === 0} deleteNotes={() => this.props.deleteNotes(e)} changeNotes={() => this.props.changeNotes(e)}/>
                })}
            </div>
        )
    }
}

export default Applist;