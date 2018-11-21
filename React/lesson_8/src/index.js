import React from 'react';
import ReactDOM from 'react-dom';
import CreateReactClass from 'create-react-class';
import Textarea from './components/textarea/textarea';
import Applist from './components/applist/applist';

const list = [
    {
        id: 1,
        name: "What is Lorem Ipsum?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        color: "rgb(70, 41, 5)"
    },
    {
        id: 2,
        name: "Why do we use it?",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        color: "rgb(48, 100, 5)"
    },
    {
        id: 3,
        name: "Where does it come from?",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        color: "rgb(5, 100, 56)"
    },
]



const App = CreateReactClass({
    getInitialState () {
        return {
          notes: list
        };
    },

    handlerNewNote: function (newNote) {
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({notes: newNotes});
    },
    render(){
        return (
            <div className="container-fluid">
                <Textarea onClick={this.handlerNewNote} />
                <Applist notes={this.state.notes}/>
            </div>
        )
    }
})
    

ReactDOM.render(<App />, document.getElementById('root'));
