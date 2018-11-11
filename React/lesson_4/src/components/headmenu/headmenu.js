import React from 'react';
import './headmenu.css';

class Headmenu extends React.Component {
    state={
        nav: [
            {
                label: 'Home',
                link: '/'
            },
            {
                label: 'About',
                link: '/about'
            },
            {
                label: 'Contact',
                link: '/contact'
            },
            {
                label: 'How it Works',
                link: '/hiw'
            }
        ]
    }
    render(){
        return(
            <nav className="nav justify-content-center">
                {this.state.nav.map((item) => {
                    return <a key={item.link} href='#'>{item.label}</a>
                })}
            </nav>
        )
    }
}

export default Headmenu;