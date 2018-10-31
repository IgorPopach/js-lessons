import React from 'react';
import './content.css';
import Cars from './../cars/cars';

class Content extends React.Component {
    render() {
        return (
            <div>
                content.js
                <Cars model={'BMW'}
                      type={'sedan'}
                      engine={'2.0'}
                      color={'white'}
                      price={10000}
                />
                <Cars model={'AUDI'}
                      type={'hatchback'}
                      engine={'3.0'}
                      color={'black'}
                      price={35000}
                />
                <Cars model={'Lanos'}
                      type={'sedan'}
                      engine={'1.5'}
                      color={'baklagan'}
                      price={500}
                />
            </div>);
    }
}

export default Content;