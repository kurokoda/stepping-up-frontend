import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {AUTH} from '../../../../shared/constants/pages';

class AuthLinks extends Component {

  // Props -------------------------------------------------------------

  static propTypes = {};

  static defaultProps = {};

  // React -------------------------------------------------------------

  render() {
    return (
      <section>
        {this.linkElements}
      </section>
    );
  }

  get linkElements() {
    return AUTH.ALL.map((page) => {
      return <Link
        key={page.key}
        to={page.route}
        style={styles.link}>
        {page.label}
      </Link>
    })
  }
}

// Exports -------------------------------------------------------------

export default withRouter(AuthLinks);

// Styles -------------------------------------------------------------

const styles = {
  link: {
    color: 'white',
  },
}
