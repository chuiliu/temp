import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => (<div>loading...</div>);

const Index = Loadable({
  loader: () => import('@/pages/Index/Index'),
  loading: Loading,
  delay: 200
});

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route exact path="/index" component={Index} />
    <Redirect to="/" />
  </Switch>
);

export default AppRouter;
