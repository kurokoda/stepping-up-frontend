import {css, StyleSheet} from 'aphrodite';
import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import PAGES from '../../../../shared/constants/page';

const Header = ({...props}) => {

  // React -------------------------------------------------------------

  const logout = () => {
    props.logout(props.user, onLogoutSuccess, onLogoutError);
  };

  const onLogoutSuccess = () => {
    props.history.push(PAGES.USER.LOGIN.route)
  };

  const onLogoutError = () => {};

  const PageLinks = () => {
    if (!props.user) return (
      <div/>
    );
    if (props.user) return (
      <Nav id='auth-links'>
        <NavItem
          className={css(styles.link)}
          key={PAGES.APPLICATION.DASHBOARD.key}
          onClick={() => props.history.push(PAGES.APPLICATION.DASHBOARD.route)}>
          {PAGES.APPLICATION.DASHBOARD.label}
        </NavItem>
      </Nav>
    );
  };

  const AuthLinks = () => {
    if (!props.user) return (
      <Nav pullRight id='auth-links'>
        <NavItem
          className={css(styles.link)}
          key={PAGES.USER.LOGIN.key}
          onClick={() => props.history.push(PAGES.USER.LOGIN.route)}>
          {PAGES.USER.LOGIN.label}
        </NavItem>
        <NavItem
          className={css(styles.link)}
          key={PAGES.USER.SIGNUP_USER.key}
          onClick={() => props.history.push(PAGES.USER.SIGNUP_USER.route)}>
          {PAGES.USER.SIGNUP_USER.label}
        </NavItem>
      </Nav>
    );
    if (props.user) return (
      <Nav pullRight id='auth-links'>
        <NavItem
          className={css(styles.link)}
          onClick={() => props.history.push(PAGES.USER.PROFILE.route)}>
          {props.user.get('username')}
        </NavItem>
        <NavItem
          className={css(styles.link)}
          key={PAGES.USER.LOGOUT.key}
          onClick={logout}>
          {PAGES.USER.LOGOUT.label}
        </NavItem>
      </Nav>
    );
  };

  return (
    <Navbar inverse collapseOnSelect className={css(styles.header)}>
      <Navbar.Header>
        <Navbar.Toggle />
        <Navbar.Brand>
          <Link to='/'>SteppingUp</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <PageLinks
          history={props.history}
          user={props.user}/>
        <AuthLinks
          history={props.history}
          user={props.user}
          logout={props.logout}/>
      </Navbar.Collapse>
    </Navbar>
  );
};

// Props -------------------------------------------------------------

Header.propTypes = {};

Header.defaultProps = {};

// Exports -------------------------------------------------------------

export default withRouter(Header);

// Styles -------------------------------------------------------------

const styles = StyleSheet.create({
  header: {
    borderRadius: '0px',
    margin      : '0px',
  }
});
