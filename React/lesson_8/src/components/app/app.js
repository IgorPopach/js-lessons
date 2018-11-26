import React from 'react';
import Textarea from './../textarea/textarea';
import Applist from './../applist/applist';


class App extends React.Component{
    state = {
        notes: []
    }
    componentDidUpdate() {
        let note = JSON.stringify(this.state.notes);
        localStorage.setItem("notes", note);
    }
    
    handlerNewNotes(newNote) {
        let note = JSON.stringify(newNote);
        localStorage.setItem("notes", note);
    }
    componentWillMount() {
        const storage = JSON.parse(localStorage.getItem("notes"));
        if (storage) {
            this.setState({notes : storage})
        }
    }

    deleteNotes(obj) {
        console.log('obj', obj)
        const Notes = this.state.notes;
        const newNotes = Notes.filter(note => note.id !== obj.id);
        this.setState({notes: newNotes});
    }
    render(){
        let notesLength = this.state.notes.length;
        let reverseNotes = this.state.notes.slice().reverse();
        return (
            <div className="container">
                <Textarea notesLength={notesLength} handlerNewNotes={this.handlerNewNotes} />
                <Applist notes={reverseNotes} deleteNotes={this.deleteNotes} />
            </div>
        )
    }
}
    
export default App;