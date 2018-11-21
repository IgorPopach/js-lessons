import React from 'react';
import CreateReactClass from 'create-react-class';

const textareastyle = {
    width: '30%'
}
const style = {
    marginBottom: '15px'
}
const buttonstyle = {
    display: 'block'
}


const Textarea = CreateReactClass({
    getInitialState () {
        return {
        };
    },
    handlerNewNotes: function() {
        console.log(this.refs.note.value);

        const note = {
            text:this.refs.note.value,
            color: "gray"
        };
        this.props.onClick(note);
    },
    render(){
        return (
            <div className="row" style={style}>
                <div className="col-12">
                    <textarea style={textareastyle} ref={'note'}></textarea>
                    <button style={buttonstyle} onClick={this.handlerNewNotes}>Add</button>
                </div>
            </div>
        )
    }
})

export default Textarea;