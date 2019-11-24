import React from 'react'
import LoginPage from "./LoginPage";
import renderer from 'react-test-renderer';

describe('LoginPage', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<LoginPage />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });