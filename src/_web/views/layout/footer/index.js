import React from 'react';
import {withRouter} from 'react-router-dom';

const Footer = ({...props}) => {

  // React -------------------------------------------------------------

  return (
    <footer id='footer' style={styles.container}>
      <h6>© Copyright 2016, American Psychiatric Association Foundation. All rights reserved.</h6>
      <h6>Please use the feedback form on the top-right of the page to submit comments and suggestions about the application.</h6>
    </footer>
  );
}

// Props -------------------------------------------------------------

Footer.propTypes = {};

Footer.defaultProps = {};

// Exports -------------------------------------------------------------

export default withRouter(Footer);

// Styles -------------------------------------------------------------

const styles = {
  container: {
    backgroundColor: 'white',
    borderTop      : '1px solid #CCCCCC',
    padding        : '20px 0',
    textAlign      : 'center',
  },
};
