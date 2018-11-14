import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header';
import Content from './components/content/content';

class Main extends React.Component{
    state = {
       
    }
    render(){
        return (
            <div className="container main">
                <Header />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
