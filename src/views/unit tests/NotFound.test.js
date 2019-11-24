import React from 'react'
import ReactDOM from 'react-dom';
import NotFound from "../NotFound";
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const rendercomponent = () => (shallow(<NotFound />));

describe('NotFound component try 1', () => {
    it('snapshot renders', () => {
        const renderedcomponent = rendercomponent();
        expect(renderedcomponent.find('div').length).toEqual(1);
    });
});

describe("NotFound component try 2", () => {
    test("snapshot renders", () => {
        const button = renderer.create(<NotFound />);
        expect(button.toJSON()).toMatchSnapshot();
    });
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotFound />, div);
});