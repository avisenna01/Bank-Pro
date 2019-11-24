import React from 'react'
import LoginPage from "../LoginPage";
import renderer from 'react-test-renderer';
import ReactDOM from "react-dom";
import { shallow } from 'enzyme';

const rendercomponent = () => (shallow(<LoginPage />));

describe('LoginPage page try 1', () => {
  it('snapshot renders', () => {
    const renderedcomponent = rendercomponent();
    expect(renderedcomponent.find('div').length).toEqual(0);
  });
});

describe('LoginPage page try 2', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<LoginPage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginPage />, div);
});