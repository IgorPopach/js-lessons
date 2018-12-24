import App from './app.js';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Counter from './counter.js';

configure({
    adapter: new Adapter()
});
describe('<App/>', () => {
    it("my first test", () => {
        const test = shallow(<App/>);
        expect (test.find(Counter)).toMatchSnapshot();
        const counter = shallow(<Counter/>);
        expect(counter.find('.cou'));
    })
})