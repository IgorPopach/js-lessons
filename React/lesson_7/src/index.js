import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Films from './components/films/films';

class Main extends React.Component{
    state = {
       
    }
    render(){
        return (
            <div className="container-fluid">
                <Films />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
