import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Footer extends Component {

  // Props -------------------------------------------------------------

  static propTypes = {};

  static defaultProps = {};

  // React -------------------------------------------------------------

  render() {
    return (
      <section style={styles.container}>
        <span>Footer</span>
      </section>
    );
  }
}

// Exports -------------------------------------------------------------

export default withRouter(Footer);

// Styles -------------------------------------------------------------

const styles = {
  container: {
    backgroundColor: 'black',
    height         : '100px',
    width          : '100%',
  },
}
