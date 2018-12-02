import React from 'react';

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


class Textarea extends React.Component {
    state = {
        title:"",
        text:"",
        error:"Please type title and text...",
    };
    
    handleInputChange = (event) => {
        const target = event.target;
        if (target.name === 'title') {
            this.setState({title: target.value});
        }
        else if (target.name === 'text') {
            this.setState({text: target.value});
        }
    }

    handlerNewNote = () => {
        if (this.state.title.length !== 0 && this.state.text.length !== 0) {
            const note = {
                'id': Date.now(),
                'title': this.state.title,
                'text': this.state.text,
                'color': "rgb(201, 149, 87)",
            };
            this.setState({ error:"",  })
            this.props.handlerNewNotes(note);
        } else {
            this.setState({error:"Please type title and text..."})
        }
    }

    handlerChangeNote = () => {
        if (this.state.title.length !== 0 && this.state.text.length !== 0) {
            const note = {
                'id': this.state.id,
                'title': this.state.title,
                'text': this.state.text,
                'color': "rgb(201, 149, 87)",
            };
            this.setState({ error:"Please type title and text...", onToggle: false, title:"", text:"" })
            this.props.handlerNewNotes(note);
        } else {
            this.setState({error:"Please type title and text..."})
        }
    }

    componentDidUpdate() {
        console.log(this.props.selectedNote && this.props.selectedNote.id !== this.state.id, this.props)
        if (this.props.selectedNote && this.props.selectedNote.id !== this.state.id) {
            this.setState({...this.props.selectedNote});
            this.setState({onToggle:this.props.onToggle, error:"Please change title and text..."});
        }
    }

    render(){
        const error = this.state.error !== '' && <p>{this.state.error}</p>
        const btn = this.state.onToggle ? <button style={buttonStyle} onClick={this.handlerChangeNote} className="btn btn-dark">Change Note</button>
        : <button style={buttonStyle} onClick={this.handlerNewNote} className="btn btn-dark">Add</button>
        return (
            <div className="row" style={style}>
                <div className="col-12">
                    <input type="text" name='title' placeholder="Title" style={inputStyle} value={this.state.title} onChange={this.handleInputChange} />
                    <textarea style={textareastyle} name='text' placeholder="Note..." value={this.state.text} onChange={this.handleInputChange} />
                    {btn}
                    {error}
                </div>
            </div>
        )
    }
};

export default Textarea;