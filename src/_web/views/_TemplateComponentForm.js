import update from 'immutability-helper';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
//
import {PasswordInput, TextInput} from '../../shared-fe/components/inputs';
import Validation from '../../shared-fe/validation';
import {minLength, required} from '../../shared-fe/validation/rules';

const fieldValidations = [
  Validation.set('username', 'Username', required, minLength(3)),
  Validation.set('password', 'Password', required)
];

class TemplateComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange     = this.onChange.bind(this);
    this.state        = {
      showErrors      : false,
      validationErrors: {},

      username: '',
      password: '',
    };

    this.setState({
      validationErrors: Validation.run(this.state, fieldValidations)
    });
  }

  getErrorFor(field) {
    return this.state.validationErrors[field];
  }

  onChange(event) {
    event.preventDefault();
    let newState              = update(this.state, {
      [event.target.id]: {$set: event.target.value}
    });
    newState.validationErrors = Validation.run(newState, fieldValidations);
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

  render() {
    return (
      <div className="templateComponet">
        <div>Template Compontent</div>
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

  propTypes = {
    'onSubmit': PropTypes.func,
  };
}

function mapStateToProps(state) {
  return {};
}

export {TemplateComponent};
export default connect(mapStateToProps)(TemplateComponent);
