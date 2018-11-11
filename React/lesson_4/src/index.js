import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Headmenu from './components/headmenu/headmenu';
import Posts from './components/posts/posts';
import Footer from './components/footer/footer';

class Main extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Headmenu />
                </div>
                    <Posts />
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
