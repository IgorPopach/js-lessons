import React from 'react';
import CreateReactClass from 'create-react-class';

const textareastyle = {
    width: '50%',
    margin: '10px 5px',
    paddingLeft: '5px',
    height: '150px',
    border: '1px solid black', 
    borderRadius: '5px',
    backgroundColor: 'rgb(255, 232, 206)'
}
const style = {
    margin: '15px -15px',
    border: '1px solid black', 
    borderRadius: '5px',
    backgroundColor: 'rgb(201, 194, 124)'
}
const buttonStyle = {
    display: 'block',
    margin: '10px 5px',
}
const inputStyle = {
    display: 'block',
    margin: '10px 5px',
    paddingLeft: '5px',
    border: '1px solid black', 
    borderRadius: '5px',
    backgroundColor: 'rgb(255, 232, 206)'
}


const Textarea = CreateReactClass({
    getInitialState () {
        return {
        };
    },
    handlerNewNote: function() {
        if (this.refs.title.value !== '' && this.refs.note.value !== '') {
            const note = {
                id: this.props.notesLength + 1,
                name: this.refs.title.value,
                text:this.refs.note.value,
                color: "rgb(201, 149, 87)",
            };
            this.props.handlerNewNotes(note);
        }
    },
    shouldComponentUpdate(nextState,nextProps) {
        return false
    },
    componentWillUpdate(){
        console.log('componentWillUpdate textarea')
    },
    render(){
        return (
            <div className="row" style={style}>
                <div className="col-12">
                    <input type="text" ref={'title'} placeholder="Title" style={inputStyle} defaultValue='' />
                    <textarea style={textareastyle} ref={'note'} placeholder="Note..." defaultValue='' />
                    <button style={buttonStyle} onClick={this.handlerNewNote} className="btn btn-dark">Add</button>
                </div>
            </div>
        )
    }
})

export default Textarea;