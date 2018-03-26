import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchDashboardData} from '../../../shared/actions/dashboard';


class DashboardContainer extends Component {

  componentDidMount() {
    this.props.fetchDashboardData();
  }

  render() {
    if (!this.props.user) {
      return <Redirect to='/'/>;
    }
    else {
      const {Layout}                             = this.props;
      const {detainees, counselors, users, user} = this.props;
      const layoutProps                          = {detainees, counselors, users, user};

      return (
        <Layout {...layoutProps}/>
      );
    }
  }
}

const mapStateToProps = state => ({
  detainees : state.detainees,
  counselors: state.counselors,
  users     : state.users,
  user      : state.user,
});

const mapDispatchToProps = {
  fetchDashboardData
};

DashboardContainer.propTypes = {
  'Layout': PropTypes.func.isRequired
};

DashboardContainer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
