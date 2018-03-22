import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {testDetaineeActions} from '../../actions/detainees';
import {testFacilityActions} from '../../actions/facilities';
import {testUserActions} from '../../actions/users';


class TestContainer extends Component {

  componentDidMount() {
    this.props.testDetaineeActions();
    this.props.testFacilityActions();
    this.props.testUserActions();
  }

  render() {
    const {Layout} = this.props;

    return (
      <Layout/>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  testDetaineeActions,
  testFacilityActions,
  testUserActions,
};

TestContainer.propTypes = {
  'Layout': PropTypes.func.isRequired
};

TestContainer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
