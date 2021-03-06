import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {alertShow} from '../../actions/app';
import {signupUser} from '../../actions/user';

class SignupAdminContainer extends Component {
  render() {
    const {Layout} = this.props;
    const props    = {
      onSubmit: this.onSubmit.bind(this),
    };

    return (
      <Layout {...props}/>
    );
  }

  onSubmit(formData) {
    this.props.signupUser(
      formData,
      this.onSignupSuccess.bind(this),
      this.onSignupError.bind(this)
    );
  }

  onSignupSuccess() {
    this.props.history.push('/login')
  }

  onSignupError() {
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {signupUser, alertShow};

export default connect(mapStateToProps, mapDispatchToProps)(SignupAdminContainer);

mapDispatchToProps.propTypes = {
  'Layout'    : PropTypes.func.isRequired,
  "signupUser": PropTypes.func.isRequired,
};

mapDispatchToProps.defaultProps = {};
