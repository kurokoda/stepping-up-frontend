import update from 'immutability-helper';
import _ from 'lodash';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {PasswordInput, TextInput} from '../../../../../shared/inputs';
import Validation from '../../../../../shared/validation';
import {minLength, mustMatch, required} from '../../../../../shared/validation/rules';

class SignupView extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange     = this.onChange.bind(this);

    this.fieldValidations = [
      Validation.set('username', 'Username', required, minLength(3)),
      Validation.set('password', 'Password', required),
      Validation.set('passwordConfirm', 'Password Confirm', required, mustMatch('password', 'Password'))
    ];

    this.state = {
      showErrors      : false,
      validationErrors: {},
      username        : '',
      password        : '',
      passwordConfirm : '',
    };
  }

  componentWillMount() {
    this.setState({
      validationErrors: Validation.run(this.state, this.fieldValidations)
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <div>Signup Component</div>
        <form onSubmit={this.handleSubmit}>
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
              LOG IN
            </Button>
          </p>
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
        username: this.state.username,
        password: this.state.password
      }
    );
  }
}

SignupView.propTypes = {};

SignupView.defaultProps = {};

// Styles -------------------------------------------------------------

const styles = {
  container: {},
  content  : {},
};

export default withRouter(SignupView);

