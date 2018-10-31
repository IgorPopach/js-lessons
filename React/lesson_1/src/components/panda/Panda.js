import React, {Component} from 'react';
import PandaImage from './Panda.svg';
import './Panda.css';

class Panda extends Component {
    render() {
        return (
            <div>
                <img src={PandaImage} className="Panda" alt="Panda" />
                <img src={PandaImage} className="Panda" alt="Panda" />
            </div>
        );
    }
}

export default Panda;