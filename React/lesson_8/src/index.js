import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

class Main extends React.Component{
    state = {
       
    }
    render(){
        return (
            <div>
                <App />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));