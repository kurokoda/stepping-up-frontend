import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteDetainee, getDetainee, getDetainees, updateDetainee, createDetainee} from '../../actions/detainees';


class DetaineeContainer extends Component {
  static propTypes = {
    'Layout': PropTypes.func.isRequired
  };

  static defaultProps = {};

  render() {
    const {Layout}    = this.props;
    const layoutProps = {
      getDetainee   : this.props.getDetainee,
      getDetainees  : this.props.getDetainees,
      deleteDetainee: this.props.deleteDetainee,
      updateDetainee : this.props.updateDetainee,
      createDetainee  : this.props.createDetainee,
    };

    return (
      <Layout {...layoutProps}/>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  getDetainee,
  getDetainees,
  deleteDetainee,
  updateDetainee,
  createDetainee,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetaineeContainer);
