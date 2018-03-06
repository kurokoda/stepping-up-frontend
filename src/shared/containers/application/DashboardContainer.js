import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getDetainees} from '../../../shared/actions/detainees';


class DashboardContainer extends Component {

  onGetDetaineesSuccess() {
  };

  onGetDetaineesError() {
  };

  render() {
    if (!this.props.user) {
      return <Redirect to='/'/>;
    }
    else {
      const {Layout}    = this.props;
      const layoutProps = {
        user: this.props.user,
      };

      return (
        <Layout {...layoutProps}/>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  getDetainees
};

DashboardContainer.propTypes = {
  'Layout': PropTypes.func.isRequired
};

DashboardContainer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
