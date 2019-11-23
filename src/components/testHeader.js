import React from 'react'
import Header from "./Header";
import renderer from 'react-test-renderer';

describe('Header', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<Header />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });