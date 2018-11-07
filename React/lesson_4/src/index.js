import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header'

class Main extends React.Component{
    state={

    }
    render(){
        return(
            <div>
                <Header />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
