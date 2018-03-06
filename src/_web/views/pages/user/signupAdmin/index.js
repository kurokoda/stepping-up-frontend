import {css, StyleSheet} from 'aphrodite';
import update from 'immutability-helper';
import _ from 'lodash';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import {EmailInput, PasswordInput, TextInput} from '../../../../../shared/components/inputs';
import PAGES from '../../../../../shared/constants/page';
import Validation from '../../../../../shared/validation';
import {minLength, mustMatch, required} from '../../../../../shared/validation/rules';

class SignupAdminView extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange     = this.onChange.bind(this);

    this.fieldValidations = [
      Validation.set('username', 'Username', required, minLength(3)),
      Validation.set('email', 'Email', required, minLength(3)),
      Validation.set('password', 'Password', required),
      Validation.set('passwordConfirm', 'Password Confirm', required, mustMatch('password', 'Password'))
    ];

    this.state = {
      showErrors      : false,
      validationErrors: {},
      name            : 'Mercy Hospital',
      address         : '1 Broadway',
      city            : "New York",
      state           : "NY",
      zip             : "10001",
      firstName       : 'Ian',
      lastName        : 'Greenough',
      username        : 'indigo',
      email           : 'indigo.personal@gmail.com',
      password        : 'password',
      passwordConfirm : 'password',
    };
  }

  componentWillMount() {
    this.setState({
      validationErrors: Validation.run(this.state, this.fieldValidations)
    });
  }

  render() {
    return (
      <div className={`${css(styles.container)} container`}>
        <form className={css(styles.content)} onSubmit={this.handleSubmit}>
          <h3>Admin Registration</h3>
          <TextInput value={this.state.name}
                     onChange={this.onChange}
                     showError={this.state.showErrors}
                     errorText={this.getErrorFor('name')}
                     label='Facility name'
                     id='name'/>
          <TextInput value={this.state.address}
                     onChange={this.onChange}
                     showError={this.state.showErrors}
                     errorText={this.getErrorFor('address')}
                     label='Address'
                     id='address'/>
          <TextInput value={this.state.city}
                     onChange={this.onChange}
                     showError={this.state.showErrors}
                     errorText={this.getErrorFor('city')}
                     label='City'
                     id='city'/>
          <TextInput value={this.state.state}
                     onChange={this.onChange}
                     showError={this.state.showErrors}
                     errorText={this.getErrorFor('state')}
                     label='State'
                     id='state'/>
          <TextInput value={this.state.zip}
                     onChange={this.onChange}
                     showError={this.state.showErrors}
                     errorText={this.getErrorFor('zip')}
                     label='Zip code'
                     id='zip'/>
          <TextInput value={this.state.firstName}
                     onChange={this.onChange}
                     showError={this.state.showErrors}
                     errorText={this.getErrorFor('firstName')}
                     label='First name'
                     id='firstName'/>
          <TextInput value={this.state.lastName}
                     onChange={this.onChange}
                     showError={this.state.showErrors}
                     errorText={this.getErrorFor('lastName')}
                     label='Last name'
                     id='lastName'/>
          <EmailInput value={this.state.email}
                      onChange={this.onChange}
                      showError={this.state.showErrors}
                      errorText={this.getErrorFor('email')}
                      label='Email'
                      id='email'/>
          <TextInput value={this.state.username}
                     onChange={this.onChange}
                     showError={this.state.showErrors}
                     errorText={this.getErrorFor('username')}
                     label='Username'
                     id='username'/>
          <PasswordInput value={this.state.password}
                         onChange={this.onChange}
                         showError={this.state.showErrors}
                         errorText={this.getErrorFor('password')}
                         label='Password'
                         id='password'/>
          <PasswordInput value={this.state.passwordConfirm}
                         onChange={this.onChange}
                         showError={this.state.showErrors}
                         errorText={this.getErrorFor('passwordConfirm')}
                         label='Confirm Password'
                         id='passwordConfirm'/>
          <p>
            <Button
              className="btn-block"
              bsStyle='success'
              type='submit'>
              SIGN UP
            </Button>
          </p>
          <span>Already have an account?   </span>
          <Link to={PAGES.USER.LOGIN.route}>{PAGES.USER.LOGIN.label}</Link>
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
        name     : this.state.name,
        address  : this.state.address,
        city     : this.state.city,
        state    : this.state.state,
        zip      : this.state.zip,
        firstName: this.state.firstName,
        lastName : this.state.lastName,
        username : this.state.username,
        email    : this.state.email,
        password : this.state.password,
        isAdmin  : true,
      }
    );
  }
}

SignupAdminView.propTypes = {};

SignupAdminView.defaultProps = {};

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

export default withRouter(SignupAdminView);

