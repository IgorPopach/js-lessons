import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Books from './components/books/books';
// import Content from './components/content/content';

class Main extends React.Component{
    state = {
       
    }
    render(){
        console.log("render <Main />");
        return (
            <div className="container">
            <Books />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
