import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {modalHide} from '../../shared/actions/app';
import {logout, synchronizeUserSession} from '../../shared/actions/user';
import ActivityMonitor from '../../shared/monitor/ActivityMonitor';
import Footer from './shared/footer';
import Header from './shared/header';
import Modal from './shared/modal';


class App extends Component {

  onRouteChanged() {
    this.props.user &&
    this.props.synchronizeUserSession(
      this.props.user,
      this.onSyncSuccess.bind(this),
      this.onSyncError.bind(this)
    );
  }

  onSyncSuccess() {
  }

  onSyncError() {
    this.props.logout();
  }

  onMouseMove() {
    if (this.props.user) {
      this.inactivityTimeout = 60
    }
  }

  onMouseMoveInterval() {
    if (this.props.user) {
      if (!this.inactivityTimeout) {
        this.inactivityTimeout = 60
      }
      this.inactivityTimeout -= 1;
      if (!this.inactivityTimeout) {
        this.props.logout();
      }
    }
  }

  // React -------------------------------------------------------------

  componentDidMount() {
    this.inactivityTimeout = 30 * 60;
    this.onRouteChanged();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  render() {
    const alert = this.props.app.get('alert');
    const modal = this.props.app.get('modal');
    return (
      <section id='app-container' className={css(styles.container)}>
        { modal && (
          <Modal close={this.props.modalHide} config={modal}/>
        )}
        <div id='header-container' className={css(styles.header)}>
          <Header
            logout={this.props.logout}
            user={this.props.user}/>
        </div>
        { alert && (
          <Alert bsStyle="warning">
            <strong>{alert.get('strong')}</strong> {alert.get('msg')}
          </Alert>
        )}
        <div
          id='main-container'
          className={css(styles.main)}>
          {this.props.children}
        </div>
        <Footer/>
        <ActivityMonitor
          activity={'mousemove'}
          onInterval={this.onMouseMoveInterval.bind(this)}
          onActivity={this.onMouseMove.bind(this)}/>
      </section>
    );
  }
}

// Props -------------------------------------------------------------

App.propTypes = {};

App.defaultProps = {};

// Exports -------------------------------------------------------------

const mapStateToProps = (state) => {
  return {
    user: state.user,
    app : state.app,
  };
};

const mapDispatchToProps = {
  logout,
  modalHide,
  synchronizeUserSession,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// Styles -------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    display : 'flex',
    flexFlow: 'column',
  },

  header: {},

  main: {
    minHeight: '600px'
  },

  footer: {
    flex: '0 1 40px',
  },
});
