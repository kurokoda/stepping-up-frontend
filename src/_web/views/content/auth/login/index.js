import React from 'react';
import {withRouter} from 'react-router-dom';

const LoginView = () => {
  <section style={styles.container}>
    <div style={styles.content}>
      LoginView
    </div>
  </section>
}

// Exports -------------------------------------------------------------

export default withRouter(LoginView);

LoginView.propTypes = {};

LoginView.defaultProps = {};

// Styles -------------------------------------------------------------

const styles = {
  container: {},
  content  : {},
};
