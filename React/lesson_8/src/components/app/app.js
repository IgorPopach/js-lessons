import React from 'react';
import CreateReactClass from 'create-react-class';
import Textarea from './../textarea/textarea';
import Applist from './../applist/applist';

const list = [
    {
        id: 1,
        name: "What is Lorem Ipsum?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        color: "rgb(194, 150, 97)",
    },
    {
        id: 2,
        name: "Why do we use it?",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        color: "rgb(194, 150, 97)",
    },
    {
        id: 3,
        name: "Where does it come from?",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        color: "rgb(194, 150, 97)",
    },
]


const App = CreateReactClass({
    getInitialState () {
        return {
            notes: list
        };
    },

    handlerNewNotes: function (newNote) {
        const newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        console.log('newNotes',newNotes);
        this.setState({notes: newNotes});
    },

    deleteNotes: function (obj) {
        console.log('obj', obj)
        const Notes = this.state.notes.slice();
        const newNotes = Notes.filter(note => note.id !== obj.id);
        this.setState({notes: newNotes});
    },
    
    render(){
        let notesLength = this.state.notes.length;
        return (
            <div className="container">
                <Textarea notesLength={notesLength} handlerNewNotes={this.handlerNewNotes} />
                <Applist notes={this.state.notes} deleteNotes={this.deleteNotes} />
            </div>
        )
    }
})
    
export default App;