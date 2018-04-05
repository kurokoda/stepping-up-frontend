import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchDashboardData} from '../../../shared/actions/dashboard';
import {getCounselorsFromFacilityByRange, getDetaineesFromFacilityByRange, getUsersFromFacilityByRange} from '../../../shared/actions/facility';

import {modalShow} from '../../actions/app';

class DashboardContainer extends Component {

  // componentDidMount() {
  //   this.props.fetchDashboardData();
  // }

  render() {
    if (!this.props.user) {
      return <Redirect to='/'/>;
    }
    else {
      const {Layout}                             = this.props;
      const {detainees, counselors, users, user} = this.props;
      const layoutProps                          = {
        onScreenButtonClick: this.onScreenButtonClick.bind(this),
        getUsers           : this.getUsers.bind(this),
        getCounselors      : this.getCounselors.bind(this),
        getDetainees       : this.getDetainees.bind(this),
        getUsersTotal      : this.getUsersTotal.bind(this),
        getCounselorsTotal : this.getCounselorsTotal.bind(this),
        getDetaineesTotal  : this.getDetaineesTotal.bind(this),
        detainees,
        counselors,
        users,
        user
      };
      return (
        <Layout {...layoutProps}/>
      );
    }
  }

  getDetainees(ordinal, count) {
    this.props.getDetaineesFromFacilityByRange({
      ordinal,
      count,
    })
  }

  getDetaineesTotal() {
    return this.props.detaineesTotal;
  }

  getUsers(ordinal, count) {
    this.props.getDetaineesFromFacilityByRange({
      ordinal,
      count,
    })
  }

  getUsersTotal() {
    return this.props.usersTotal;
  }

  getCounselors(ordinal, count) {
    this.props.getDetaineesFromFacilityByRange({
      ordinal,
      count,
    })
  }

  getCounselorsTotal() {
    return this.props.counselorsTotal;
  }

  onScreenButtonClick(detaineeeID) {
    this.props.modalShow({
      config: {
        Content       : Content,
        title         : 'Select a screen',
        onAfterOpen   : null,
        onRequestClose: null,
        styles        : null,
        contentLabel  : 'Foo'
      }
    })
  }

  onScreenSelect(type) {
    console.log(type);
  }
}

const Content = createReactClass({
  render: function () {
    return (
      <div>
        <Button
          block
          bsSize="small"
          bsStyle="info"
          onClick={() => {
            this.onScreenSelect('drug')
          }}>
          Drug
        </Button>
        <Button
          block
          bsSize="small"
          bsStyle="info"
          onClick={() => {
            this.onScreenSelect('suicide')
          }}>
          Suicide
        </Button>
        <Button
          block
          bsSize="small"
          bsStyle="info"
          onClick={() => {
            this.onScreenSelect('violence')
          }}>
          Violence
        </Button>
      </div>
    )
  }
});

const mapStateToProps = state => ({
  detainees      : state.detainees,
  detaineesTotal : state.detaineesTotal,
  counselors     : state.counselors,
  counselorsTotal: state.counselorsTotal,
  users          : state.users,
  usersTotal     : state.usersTotal,
  user           : state.user,
});

const mapDispatchToProps = {
  modalShow,
  fetchDashboardData,
  getUsersFromFacilityByRange,
  getCounselorsFromFacilityByRange,
  getDetaineesFromFacilityByRange,
};

DashboardContainer.propTypes = {
  'Layout': PropTypes.func.isRequired
};

DashboardContainer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
