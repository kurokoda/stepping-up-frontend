import {css, StyleSheet} from 'aphrodite';
import update from 'immutability-helper';
import _ from 'lodash';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import {PasswordInput, TextInput} from '../../../../../shared/components/inputs';
import PAGES from '../../../../../shared/constants/page';
import Validation from '../../../../../shared/validation';
import {minLength, required} from '../../../../../shared/validation/rules';

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange     = this.onChange.bind(this);

    this.fieldValidations = [
      Validation.set('email', 'Email', required, minLength(3)),
      Validation.set('password', 'Password', required)
    ];

    this.state = {
      showErrors      : false,
      validationErrors: {},
      email           : 'userthree@gmail.com',
      password        : 'password',
    };
  }

  componentWillMount() {
    this.setState({
      validationErrors: Validation.run(this.state, this.fieldValidations)
    });
  }

  render() {
    return (
      <div id='login-container' className={`${css(styles.container)} container`}>
        <form className={css(styles.content)} onSubmit={this.handleSubmit}>
          <TextInput value={this.state.email}
                     onChange={this.onChange}
                     showError={this.state.showErrors}
                     errorText={this.getErrorFor('email')}
                     label='Email'
                     id='email'/>

          <PasswordInput value={this.state.password}
                         onChange={this.onChange}
                         showError={this.state.showErrors}
                         errorText={this.getErrorFor('password')}
                         label='Password'
                         id='password'/>
          <p>
            <Button
              className="btn-block"
              bsStyle='success'
              type='submit'>
              LOG IN
            </Button>
          </p>
          <span>Don't have an account?   </span>
          <Link to={PAGES.USER.SIGNUP_USER.route}>{PAGES.USER.SIGNUP_USER.label}</Link>
        </form>
      </div>
    );
  }

  getErrorFor(field) {
    return this.state.validationErrors[field];
  }

  onChange(event) {
    event.preventDefault();
    let newState              = update(this.state, {
      [event.target.id]: {$set: event.target.value}
    });
    newState.validationErrors = Validation.run(newState, this.fieldValidations);
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({showErrors: true});
    if (!_.isEmpty(this.state.validationErrors)) return null;
    this.props.onSubmit(
      {
        email   : this.state.email,
        password: this.state.password
      }
    );
  }
}

LoginView.propTypes = {};

LoginView.defaultProps = {};

// Styles -------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    display       : 'flex',
    justifyContent: 'center',
    textAlign     : 'center',
    height        : '100vh',
  },
  content  : {
    width: '320px'
  },
});

export default withRouter(LoginView);

