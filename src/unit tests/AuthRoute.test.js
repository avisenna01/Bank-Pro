import React from 'react'
import AuthRoute from "../AuthRoute";
import renderer from 'react-test-renderer';
import ReactDOM from "react-dom";
import { shallow } from 'enzyme';

const rendercomponent = () => (shallow(<AuthRoute />));

describe('AuthRoute page try 1', () => {
    it('snapshot renders', () => {
        const renderedcomponent = rendercomponent();
        expect(renderedcomponent.find('div').length).toEqual(1);
    });
});

describe('AuthRoute page try 2', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<AuthRoute />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthRoute />, div);
});