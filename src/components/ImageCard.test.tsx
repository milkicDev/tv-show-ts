import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ShowsApi from '../api/Shows';
import Show from '../models/Show';
import ImageCard from './ImageCard';

it('render app', async () => {
  let render, show: Show;

  await ShowsApi.fetch(1)
    .then((res) => {
      show = res;
      render = renderer.create(
        <BrowserRouter>
          <ImageCard data={show} />
        </BrowserRouter>
        ).toJSON();
    });
    
  expect(render).toMatchSnapshot();
})
