import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import AuthLinks from './AuthLinks';
import PageLinks from './PageLinks';


class Header extends Component {

  // Props -------------------------------------------------------------

  static propTypes = {};

  static defaultProps = {};

  // React -------------------------------------------------------------

  render() {
    return (
      <section style={styles.container}>
        <PageLinks/>
        <AuthLinks/>
      </section>
    );
  }
}

// Exports -------------------------------------------------------------

export default withRouter(Header);

// Styles -------------------------------------------------------------

const styles = {
  container: {
    backgroundColor: 'black',
    height         : '100px',
    width          : '100%',
  },
};
