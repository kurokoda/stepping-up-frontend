import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginComponent from '../../_web/views/content/auth/login';
import LogoutComponent from '../../_web/views/content/auth/logout';
import ResetPasswordComponent from '../../_web/views/content/auth/resetPassword';
import SignupComponent from '../../_web/views/content/auth/signup';
import {AUTH, PAGES} from '../../shared/constants/pages';
//
import AboutContainer from '../../shared/containers/AboutContainer';
import LoginContainer from '../../shared/containers/auth/LoginContainer';
import LogoutContainer from '../../shared/containers/auth/LogoutContainer';
import ResetPasswordContainer from '../../shared/containers/auth/ResetPasswordContainer';
import SignupContainer from '../../shared/containers/auth/SignupContainer';
import HomeContainer from '../../shared/containers/HomeContainer';
//
import AboutComponent from '../views/content/pages/about';
import HomeComponent from '../views/content/pages/home';


const Routes = () => (
  <Switch>
    <Route
      exact
      path={PAGES.HOME.route}
      render={props => (
        <HomeContainer {...props} Layout={HomeComponent}/>
      )}
    />
    <Route
      path={PAGES.ABOUT.route}
      render={props => (
        <AboutContainer {...props} Layout={AboutComponent}/>
      )}
    />
    <Route
      path={AUTH.LOGIN.route}
      render={props => (
        <LoginContainer {...props} Layout={LoginComponent}/>
      )}
    />
    <Route
      path={AUTH.LOGOUT.route}
      render={props => (
        <LogoutContainer {...props} Layout={LogoutComponent}/>
      )}
    />
    <Route
      path={AUTH.SIGNUP.route}
      render={props => (
        <SignupContainer {...props} Layout={SignupComponent}/>
      )}
    />
    <Route
      path={AUTH.RESET_PASSWORD.route}
      render={props => (
        <ResetPasswordContainer {...props} Layout={ResetPasswordComponent}/>
      )}
    />
  </Switch>
);

export default Routes;
