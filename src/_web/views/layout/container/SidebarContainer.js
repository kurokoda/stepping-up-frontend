import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Sidebar from '../sidebar';

class SidebarContainer extends Component {

  // Props -------------------------------------------------------------

  static propTypes = {};

  static defaultProps = {};

  // React -------------------------------------------------------------

  render() {
    return (
      <section>
        <Sidebar/>
        <div style={styles.container}>
          {this.props.children}
        </div>
      </section>
    );
  }
}

// Exports -------------------------------------------------------------

export default withRouter(SidebarContainer);

// Styles -------------------------------------------------------------

const styles = {
  container: {
    display: 'inline',
    width  : '100%'
  },
}
