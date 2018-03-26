import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createFacility, deleteFacility, getFacilities, getFacility, updateFacility} from '../../actions/facility';


class FacilityContainer extends Component {
  static propTypes = {
    'Layout': PropTypes.func.isRequired
  };

  static defaultProps = {};

  render() {
    const {Layout}    = this.props;
    const layoutProps = {
      getFacility   : this.props.getFacility,
      getFacilities : this.props.getFacilities,
      deleteFacility: this.props.deleteFacility,
      updateFacility: this.props.updateFacility,
      createFacility: this.props.createFacility,
    };

    return (
      <Layout {...layoutProps}/>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  getFacility,
  getFacilities,
  deleteFacility,
  createFacility,
  updateFacility,
};

export default connect(mapStateToProps, mapDispatchToProps)(FacilityContainer);
