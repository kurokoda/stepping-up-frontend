import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Sidebar extends Component {

  // Props -------------------------------------------------------------

  static propTypes = {};

  static defaultProps = {};

  // React -------------------------------------------------------------

  render() {
    return (
      <section style={styles.container}>
        <span>Sidebar</span>
      </section>
    );
  }
}

// Exports -------------------------------------------------------------

export default withRouter(Sidebar);

// Styles -------------------------------------------------------------

const styles = {
  container: {
    backgroundColor: 'black',
    width          : '100px',
    height         : '100vh',
  },
}
