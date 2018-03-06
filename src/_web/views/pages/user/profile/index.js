import React from 'react';
import {withRouter} from 'react-router-dom';

const ProfileView = () => {
  return (<section style={styles.container}>
    <div style={styles.content}>
      ProfileView
    </div>
  </section>);
};

// Exports -------------------------------------------------------------

export default withRouter(ProfileView);

ProfileView.propTypes = {};

ProfileView.defaultProps = {};

// Styles -------------------------------------------------------------

const styles = {
  container: {},
  content  : {},
};
