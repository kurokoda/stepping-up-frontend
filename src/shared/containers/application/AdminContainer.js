import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteAdmin, getAdmin, getAdmins, patchAdmin, postAdmin} from '../../actions/admin';


class AdminContainer extends Component {
  static propTypes = {
    'Layout': PropTypes.func.isRequired
  };

  static defaultProps = {};

  render() {
    const {Layout}    = this.props;
    const layoutProps = {
      getAdmin   : this.props.getAdmin,
      getAdmins  : this.props.getAdmins,
      deleteAdmin: this.props.deleteAdmin,
      patchAdmin : this.props.patchAdmin,
      postAdmin  : this.props.postAdmin,
    };

    return (
      <Layout {...layoutProps}/>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  getAdmin,
  getAdmins,
  deleteAdmin,
  patchAdmin,
  postAdmin,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
