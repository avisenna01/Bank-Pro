import Header from "./Header"

describe('Header', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<Header />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });