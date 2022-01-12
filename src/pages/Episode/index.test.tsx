import React from 'react';
import renderer from 'react-test-renderer'
import ShowDetails from '.';

it('render app', () => {
  const render = renderer.create(<ShowDetails id={1} />).toJSON();
  expect(render).toMatchSnapshot();
})
