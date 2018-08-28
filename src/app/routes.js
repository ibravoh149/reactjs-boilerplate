import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home/HomePage';
import NotFound from './components/NotFound';



const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/not-found" component={NotFound} />

      <Redirect to="/" />
    </Switch>
  </div>
);

export default Routes;
