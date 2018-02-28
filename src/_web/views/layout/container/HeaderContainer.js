import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../header';

class HeaderContainer extends Component {

  // Props -------------------------------------------------------------

  static propTypes = {};

  static defaultProps = {};

  // React -------------------------------------------------------------

  render() {
    return (
      <section>
        <Header/>
        <div style={styles.container}>
          {this.props.children}
        </div>
      </section>
    );
  }
}

// Exports -------------------------------------------------------------

export default withRouter(HeaderContainer);

// Styles -------------------------------------------------------------

const styles = {
  container: {},
}
