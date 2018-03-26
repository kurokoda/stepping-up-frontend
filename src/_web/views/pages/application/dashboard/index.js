import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Admin from './Admin';
import Counselor from './Counselor';
import User from './User';


class DashboardView extends Component {
  render() {
    return (
      <section className={css(styles.container)}>
        <Switch>
          <Route path={`${this.props.match.path}/admin`} render={props => (<Admin {...this.props}/>)}/>
          <Route path={`${this.props.match.path}/counselor`} render={props => (<Counselor {...this.props}/>)}/>
          <Route path={`${this.props.match.path}/user`} render={props => (<User {...this.props}/>)}/>
        </Switch>
      </section>
    );
  }
}

DashboardView.propTypes = {};

DashboardView.defaultProps = {};

export default withRouter(DashboardView);

const styles = StyleSheet.create({
  container: {},
});