import React from 'react';

class Header extends React.Component {
    state={
        nav: [
            'Home',
            'About',
            'contact',
            'How it Works'
        ]
    }
    render(){
        return(
            <div>
                <nav>
                    {this.state.nav.map((iterator) => {
                    return <a>{iterator}</a>
                })}
                </nav>
            </div>
        )
    }
}

export default Header;