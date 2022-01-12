import { Redirect } from 'react-router-dom';
import ShowDetails from '../pages/Episode';
import Home from '../pages/Home';

const routes = [
  {
    path: '/',
    key: 'root',
    exact: true,
    component: () => <Redirect to={'/shows'} />,
  },
  {
    path: '/shows',
    key: 'dashboard',
    exact: true,
    component: () => <Home />,
  },
  {
    path: '/show/:id',
    key: 'showId',
    exact: true,
    // component: () => <Redirect to={'/shows'} />,
    component: ({ match }: { match: any }) => <ShowDetails id={match.params.id} />,
  },
];

export default routes;
