import React from 'react';
import {withRouter} from 'react-router-dom';

const LogoutView = () => {
  return (<section style={styles.container}>
    <div style={styles.content}>
      LogoutView
    </div>
  </section>);
};

// Exports -------------------------------------------------------------

export default withRouter(LogoutView);

LogoutView.propTypes = {};

LogoutView.defaultProps = {};

// Styles -------------------------------------------------------------

const styles = {
  container: {},
  content  : {},
};
