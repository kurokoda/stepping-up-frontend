import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchDashboardData} from '../../../shared/actions/dashboard';
import {modalShow} from '../../actions/app';

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
      const layoutProps                          = {detainees, counselors, users, user, onScreenButtonClick: this.onScreenButtonClick.bind(this)};

      return (
        <Layout {...layoutProps}/>
      );
    }
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
  detainees : state.detainees,
  counselors: state.counselors,
  users     : state.users,
  user      : state.user,
});

const mapDispatchToProps = {
  modalShow,
  fetchDashboardData,
};

DashboardContainer.propTypes = {
  'Layout': PropTypes.func.isRequired
};

DashboardContainer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
