import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';


class HeaderFooterContainer extends Component {

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
        <Footer/>
      </section>
    );
  }
}

// Exports -------------------------------------------------------------

export default withRouter(HeaderFooterContainer);

// Styles -------------------------------------------------------------

const styles = {
  container: {
    minHeight: 'calc(500px - 400px)'
  },
}
