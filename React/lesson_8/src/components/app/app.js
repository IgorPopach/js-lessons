import React from 'react';
import Textarea from './../textarea/textarea';
import Applist from './../applist/applist';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: []
        };
        this.handlerNewNotes=this.handlerNewNotes.bind(this);
        this.deleteNotes=this.deleteNotes.bind(this);
    }
    
    // shouldComponentUpdate(nextState,nextProps){
    //     console.log('app nextState',nextState);
    //     console.log('app this.state',this.state);
    //     if (nextState !== this.state){
    //         return true
    //     } 
    // }
    componentWillUpdate(){
        console.log('componentWillUpdate app')
    }
    
    handlerNewNotes(newNote) {
        const arr = this.state.notes;
        arr.push(newNote);
        const notes = JSON.stringify(arr);
        // const notes = JSON.stringify(newNote);
        // const noteId = newNote.id.toString();
        // console.log(typeof(noteId));
        localStorage.setItem("notes", notes);
        this.setState({notes : JSON.parse(localStorage.getItem("notes"))});
    }
    componentDidMount() {
        const storage = JSON.parse(localStorage.getItem("notes"));
        if (storage) {
            this.setState({notes : storage})
        }
    }

    deleteNotes(obj) {
        const storage = JSON.parse(localStorage.getItem("notes"));
        const newNotes = storage.filter(note => note.id !== obj.id);
        localStorage.removeItem('notes');
        const notes = JSON.stringify(newNotes);
        localStorage.setItem('notes', notes);
        this.setState({notes : JSON.parse(localStorage.getItem("notes"))});
        
        // const Notes = this.state.notes;
        // const newNotes = Notes.filter(note => note.id !== obj.id);
        // this.setState({notes: newNotes});
    }
    changeNotes(obj) {
        const storage = JSON.parse(localStorage.getItem("notes"));
        const changeNote = storage.filter(note => note.id === obj.id);
        


        this.setState({notes : JSON.parse(localStorage.getItem("notes"))});

        // const Notes = this.state.notes;
        // const newNotes = Notes.filter(note => note.id !== obj.id);
        // this.setState({notes: newNotes});
    }
    render(){
        let notesLength = this.state.notes.length;
        let reverseNotes = this.state.notes.slice().reverse();
        let applist;
        if (this.state.notes !== []) applist = <Applist notes={reverseNotes} deleteNotes={this.deleteNotes} changeNotes={this.changeNotes}/>;
        return (
            <div className="container">
                <Textarea notesLength={notesLength} handlerNewNotes={this.handlerNewNotes} />
                {applist}
            </div>
        )
    }
}
    
export default App;