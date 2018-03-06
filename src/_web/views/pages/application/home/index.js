import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import PAGES from '../../../../../shared/constants/page';

class HomeView extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <section className={css(styles.container)}>
        <div className={css(styles.content)}>
          <img className={css(styles.logo)} src='logo.png' alt='My_Logo'/>
          <div className={css(styles.tagline)}>
            <h3>
              A screening tool to manage mental health referrals within the justice system.
            </h3>
          </div>
          { this.props.showAuthContainer && (
            <div id='auth-container'>
              <div>
                <Link to={PAGES.USER.LOGIN.route}>
                  <Button className={css(styles.button)}>Login</Button>
                </Link>
                <Link to={PAGES.USER.SIGNUP_USER.route}>
                  <Button className={css(styles.button)}>Sign Up</Button>
                </Link>
              </div>
              <Link to={PAGES.USER.SIGNUP_ADMIN.route}>{PAGES.USER.SIGNUP_ADMIN.label}</Link>
            </div>)
          }
        </div>
      </section>
    );
  }
}

export default withRouter(HomeView);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    display        : 'flex',
    justifyContent : 'center',
    textAlign      : 'center',
    height         : '100vh',
  },
  content  : {},
  text     : {
    display: 'block',
    color  : '#0F0',
  },
  logo     : {
    width : '80vw',
    margin: '20px',
  },
  button   : {
    width : '200px',
    margin: '0 10px 20px 10px',
  },
  tagline  : {
    display  : 'block',
    width    : '100%',
    borderTop: '1px solid #CCCCCC',
    padding  : '60px',
  },
});