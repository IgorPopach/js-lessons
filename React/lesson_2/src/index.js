import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header';
import Content from './components/content/content';
import Aside from './components/aside/aside';
import Footer from './components/footer/footer';

class Main extends React.Component {
    render(){
        return (
            <div>
                <span>Main</span>
                <Header />
                <Content />
                <Aside />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
