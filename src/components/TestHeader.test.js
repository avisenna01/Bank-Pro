import React from 'react'
import Header from "./Header";
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const rendercomponent = () => (shallow(<Header />));

describe('Header', () => {
  it('snapshot renders', () => {
    const renderedcomponent = rendercomponent();
    expect(renderedcomponent.find('div').length).toEqual(1);
    // const component = renderer.create(<Header />);
    // let tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
  });
});