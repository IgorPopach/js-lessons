import React from 'react';
import Textarea from './../textarea/textarea';
import Applist from './../applist/applist';

const ITEMS_NAME = 'notes';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: [],
            selectedNote: null,
            selectedNote: null,
        };
        this.handlerNewNotes=this.handlerNewNotes.bind(this);
        this.deleteNotes=this.deleteNotes.bind(this);
    }
    
    componentDidMount() {
        this.getStoredNotes();
    }

    handlerNewNotes(newNote) {
        const { notes } = this.state;
        const filteredNotes = notes.filter(note => note.id !== newNote.id);
        const updatedNotes = [...filteredNotes, newNote];
        this.setState({ notes: updatedNotes, });
        this.storNotes(updatedNotes);
    }

    getStoredNotes() {
        const notes = JSON.parse(localStorage.getItem(ITEMS_NAME));
        this.setState({ notes, });
    }

    storNotes(notes){
        localStorage.setItem(ITEMS_NAME, JSON.stringify(notes))
    }

    deleteNotes(noteId) {
        this.setState(
            (prevState) => ({
                ...prevState,
                notes: prevState.notes.filter(note => note.id !== noteId)
            }),
            () => this.storNotes(this.state.notes) // Callback will fires after state updates
        );
    }

    changeNotes = (noteId) => {
        this.setState((prevState) => ({
            ...prevState,
            selectedNote: prevState.notes.filter(note => note.id === noteId)[0],
            onToggle: true,
        }));
    }

    render(){
        let notesLength = this.state.notes.length;
        let reverseNotes = this.state.notes.slice().reverse();
        let applist;
        if (this.state.notes !== []) applist = <Applist notes={reverseNotes} deleteNotes={this.deleteNotes} changeNotes={this.changeNotes}/>;
        return (
            <div className="container">
                <Textarea selectedNote={this.state.selectedNote} onToggle={this.state.onToggle} notesLength={notesLength} handlerNewNotes={this.handlerNewNotes} />
                {applist}
            </div>
        )
    }
}
    
export default App;