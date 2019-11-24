import React from 'react'
import History from "../History";
import renderer from 'react-test-renderer';
import ReactDOM from "react-dom";
import { shallow } from 'enzyme';

const rendercomponent = () => (shallow(<History />));

describe('History page try 1', () => {
    it('snapshot renders', () => {
        const renderedcomponent = rendercomponent();
        expect(renderedcomponent.find('div').length).toEqual(1);
    });
});

describe('History page try 2', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<History />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<History />, div);
});