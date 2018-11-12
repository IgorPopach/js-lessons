import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header';

class Main extends React.Component{
    state = {
       
    }
    render(){
        return (
            <div className="container main">
                <h2>Main</h2>
                <Header />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
