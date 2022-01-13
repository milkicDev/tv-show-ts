import React from 'react';
import { Redirect, Switch, Route, BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from './routes/routes';

import './App.scss';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const { t } = useTranslation('common');

  return (
    <div className='App'>
        <BrowserRouter>
          <header className='App-header header'>
            <div className='container'>
              <h1 className='brand'>{t('brand')}</h1>
            </div>
          </header>

          <Switch>
            {routes.map((route: any) => (
              <Route
                key={route.key}
                path={route.path}
                exact={route.exact}
                render={(renderProps: object) => (
                  <route.component {...renderProps} />
                )}
              />
            ))}
            <Route component={() => <Redirect to={'/show'} />} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
