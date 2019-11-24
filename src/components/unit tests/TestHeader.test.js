import React from 'react'
import ReactDOM from 'react-dom';
import Header from "../Header";
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const rendercomponent = () => (shallow(<Header />));

describe('Header component try 1', () => {
  it('snapshot renders', () => {
    const renderedcomponent = rendercomponent();
    expect(renderedcomponent.find('div').length).toEqual(0);
  });
});

describe("Header component try 2", () => {
  test("snapshot renders", () => {
    const button = renderer.create(<Header />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});