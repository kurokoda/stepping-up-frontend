import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {logout} from '../../../../shared/actions/user';
import Header from '../../layout/header';

class HeaderContainer extends Component {

  // React -------------------------------------------------------------

  render() {
    const alert = this.props.app.get('alert');
    return (
      <section id='app-container' className={css(styles.container)}>
        {/*<Modal config={this.props.app.get('modal')}/>*/}
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
      </section>
    );
  }
}

// Props -------------------------------------------------------------

HeaderContainer.propTypes = {};

HeaderContainer.defaultProps = {};

// Exports -------------------------------------------------------------

const mapStateToProps = (state) => {
  return {
    user: state.user,
    app : state.app,
  };
}

const mapDispatchToProps = {
  logout
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));

// Styles -------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    display : 'flex',
    flexFlow: 'column',
    height  : '100vh',
  },

  header: {
    flex: '0 1 auto',
  },

  main: {
    justifyContent: 'center',
    display       : 'flex',
    flex          : '1',
  },

  footer: {
    flex: '0 1 40px',
  },
});
