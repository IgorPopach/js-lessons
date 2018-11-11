import React from 'react';

class Header extends React.Component {
    state={
        nav: [
            {
                label: "Home",
                link: "/"
            },
            {
                label: "About",
                link: "/about"
            },
            
            'contact',
            'How it Works'
        ]
    }
    render(){
        return(
            <div>
                <nav>
                    {this.state.nav.map((item) => (<a key={item.link} href="#">{item.label}</a>))}
                </nav>
            </div>
        )
    }
}

export default Header;
