import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteDetainee, getDetainee, getDetainees, patchDetainee, postDetainee} from '../../actions/detainees';


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
      patchDetainee : this.props.patchDetainee,
      postDetainee  : this.props.postDetainee,
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
  patchDetainee,
  postDetainee,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetaineeContainer);
