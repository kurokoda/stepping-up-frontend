import React from 'react';
import {withRouter} from 'react-router-dom';

const SignupView = () => {
  return (<section style={styles.container}>
    <div style={styles.content}>
      SignupView
    </div>
  </section>);
};

// Exports -------------------------------------------------------------

export default withRouter(SignupView);

SignupView.propTypes = {};

SignupView.defaultProps = {};

// Styles -------------------------------------------------------------

const styles = {
  container: {},
  content  : {},
};