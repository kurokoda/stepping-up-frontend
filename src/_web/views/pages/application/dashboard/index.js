import {css, StyleSheet} from 'aphrodite';
import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Admin from './dashboards/Admin';
import Counselor from './dashboards/Counselor';
import User from './dashboards/User';


const DashboardView = ({...props}) => {
  return (
    <section className={css(styles.container)}>
      <Switch>
        <Route path={`${props.match.path}/admin`} component={Admin}/>
        <Route path={`${props.match.path}/counselor`} component={Counselor}/>
        <Route path={`${props.match.path}/user`} component={User}/>
      </Switch>
    </section>
  );
}

DashboardView.propTypes = {};

DashboardView.defaultProps = {};

export default withRouter(DashboardView);

const styles = StyleSheet.create({
  container: {},
});