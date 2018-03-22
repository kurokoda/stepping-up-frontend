import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {alertHide} from '../../actions/app';
import {login} from '../../actions/users';
import USER from '../../constants/user';
class LoginContainer extends Component {
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
    this.props.login(
      formData,
      this.onLoginSuccess.bind(this),
      this.onLoginError.bind(this)
    );
  }

  onLoginSuccess() {
    let userType;
    if (this.props.user.get('admin')) {
      userType = USER.TYPE.ADMIN;
    } else if (this.props.user.get('counselor')) {
      userType = USER.TYPE.COUNSELOR;
    } else {
      userType = USER.TYPE.USER;
    }
    this.props.history.push(`/dashboard/${userType}`);
  }

  onLoginError() {
    setTimeout(() => this.props.alertHide(), 5000)
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {login, alertHide};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

mapDispatchToProps.propTypes = {
  'Layout': PropTypes.func.isRequired,
  'login' : PropTypes.func.isRequired,
};

mapDispatchToProps.defaultProps = {};
