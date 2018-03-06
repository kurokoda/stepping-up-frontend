import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteFacility, getFacilities, getFacility, patchFacility, postFacility} from '../../actions/facility';


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
      patchFacility : this.props.patchFacility,
      postFacility  : this.props.postFacility,
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
  patchFacility,
  postFacility,
};

export default connect(mapStateToProps, mapDispatchToProps)(FacilityContainer);
