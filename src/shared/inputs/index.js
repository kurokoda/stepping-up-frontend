import React, {Component} from 'react';
import {Checkbox, ControlLabel, FormControl} from 'react-bootstrap';
import inputMasks from './inputMasks';
import MaskedInput from './MaskedInput';

export class FileInput extends Component {
  render() {
    return (
      <div className='form-group'>
        <ControlLabel className="btn btn--files">
          {this.props.label}
          <FormControl
            type='file'
            value={this.props.value}
            className={'form-control form-control--input ' + this.props.className}
            name={this.props.id}
            id={this.props.id}
            onChange={this.props.onChange}
            data-docCategoryId={this.props.docCategoryId}
          />
          <div className={'validation-error ' + (this.props.showError ? 'show' : 'hidden')}>
            <span className='text'>{this.props.errorText}</span>
          </div>
        </ControlLabel>
      </div>
    );
  }
}

export class PasswordInput extends Component {
  render() {
    return (
      <div className='form-group'>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          type='password'
          value={this.props.value}
          className={'form-control ' + this.props.className}
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}/>
        <div className={'validation-error ' + (this.props.showError ? 'show' : 'hidden')}>
          <span className='text'>{this.props.errorText}</span>
        </div>
      </div>
    );
  }
}

export class NumberInput extends Component {
  render() {
    return (
      <div className='form-element'>
        <ControlLabel>{this.props.label}</ControlLabel>
        <MaskedInput
          type='tel'
          value={this.props.value}
          className={'form-control ' + this.props.className}
          mask={inputMasks.NUMBER}
          placeholderChar=" "
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onBlur={this.props.onBlur}
          onChange={this.props.onChange}/>
        <div className={'validation-error ' + (this.props.showError ? 'show' : 'hidden')}>
          <span className='text'>{this.props.errorText}</span>
        </div>
      </div>
    );
  }
}

export class PhoneInput extends Component {
  render() {
    return (
      <div className='form-group'>
        <ControlLabel>{this.props.label}</ControlLabel>
        <MaskedInput
          type='tel'
          value={this.props.value}
          className={'form-control ' + this.props.className}
          mask={inputMasks.PHONE}
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}/>
        <div
          className={'validation-error validation-error--details ' + (this.props.showError ? 'show' : 'hidden')}>
          <span className='text'>{this.props.errorText}</span>
        </div>
      </div>
    );
  }
}

export class CurrencyInput extends Component {
  render() {
    return (
      <div className='form-group'>
        <ControlLabel>{this.props.label}</ControlLabel>
        <MaskedInput
          value={this.props.value}
          className='form-control'
          mask={inputMasks.CURRENCY.US}
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}/>
        <div className={'validation-error ' + (this.props.showError ? 'show' : 'hidden')}>
          <span className='text'>{this.props.errorText}</span>
        </div>
      </div>
    );
  }
}

export class SSNInput extends Component {
  render() {
    return (
      <div className='form-group'>
        <ControlLabel>{this.props.label}</ControlLabel>
        <MaskedInput
          type='tel'
          value={this.props.value}
          className={'form-control ' + this.props.className}
          mask={inputMasks.SSN}
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}/>
        <div
          className={'validation-error validation-error--details ' + (this.props.showError ? 'show' : 'hidden')}>
          <span className='text'>{this.props.errorText}</span>
        </div>
      </div>
    );
  }
}

export class TextInput extends Component {
  render() {
    return (
      <div className='form-group'>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          type='text'
          value={this.props.value}
          className={'form-control ' + this.props.className}
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
        <div className={'validation-error ' + (this.props.showError ? 'show' : 'hidden')}>
          <span className='text'>{this.props.errorText}</span>
        </div>
      </div>
    );
  }
}

export class EmailInput extends Component {
  render() {
    return (
      <div className='form-group'>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          type='email'
          value={this.props.value}
          className={'form-control ' + this.props.className}
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
        <div className={'validation-error ' + (this.props.showError ? 'show' : 'hidden')}>
          <span className='text'>{this.props.errorText}</span>
        </div>
      </div>
    );
  }
}

export class SelectInput extends Component {
  render() {
    return (
      <div className='form-group'>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          value={this.props.value}
          componentClass='select'
          className={'select ' + this.props.className}
          name={this.props.id}
          id={this.props.id}
          onChange={this.props.onChange}
        >
          <option value='' disabled>{this.props.placeholder}</option>
          {
            this.props.options.map(function (option) {
              return <option key={option.value}
                             value={option.value}>
                {option.display}
              </option>;
            })
          };
        </FormControl>
        <div className={'validation-error ' + (this.props.showError ? 'show' : 'hidden')}>
          <span className='text'>{this.props.errorText}</span>
        </div>
      </div>
    );
  }
}

export class CheckboxInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  render() {
    return (
      <div>
        <Checkbox
          id={this.props.id}
          name={this.props.name}
          onChange={(e) => {
            this.setState({isActive: e.target.checked});
            this.props.onChange(e);
          }}
        >
                    <span>{!this.state.isActive ? <i className="fa fa-square-o"></i> :
                      <i className="fa fa-check-square-o"></i>}</span>
          {this.props.children}
        </Checkbox>
        <div className={'validation-error ' + (this.props.showError ? 'show' : 'hidden')}>
          <span className='text'>{this.props.errorText}</span>
        </div>
      </div>
    );
  }
}
