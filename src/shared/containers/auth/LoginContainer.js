import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class LoginContainer extends Component {
  static propTypes = {
    'Layout': PropTypes.func.isRequired
  };

  static defaultProps = {};

  render() {
    const {Layout} = this.props;

    return (
      <Layout/>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
