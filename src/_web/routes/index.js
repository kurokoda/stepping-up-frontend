import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AboutComponent from '../../_web/views/about';
import HomeComponent from '../../_web/views/home';
import AboutContainer from '../../shared/containers/AboutContainer';
import HomeContainer from '../../shared/containers/HomeContainer';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <HomeContainer {...props} Layout={HomeComponent}/>
      )}
    />
    <Route
      path="/about"
      render={props => (
        <AboutContainer {...props} Layout={AboutComponent}/>
      )}
    />
  </Switch>
);

export default Routes;
