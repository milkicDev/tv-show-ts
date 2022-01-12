import React from 'react';
import renderer from 'react-test-renderer'
import Actor from '../models/Actor';
import ActorLists from './ActorsList';
import ShowsApi from '../api/Shows';

it('render app', async () => {
  let render, actors: Actor[];

  await ShowsApi.getCast(1)
    .then((res) => {
      actors = res;
      render = renderer.create(<ActorLists actor={actors[0]} />).toJSON();
    })
    .catch((error) => console.error(error));

  expect(render).toMatchSnapshot();
})
