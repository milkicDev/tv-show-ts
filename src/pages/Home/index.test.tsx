import React from 'react';
import renderer from 'react-test-renderer'
import Home from '.';

it('render app', () => {
  const render = renderer.create(<Home />).toJSON();
  expect(render).toMatchSnapshot();
})
