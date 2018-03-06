import React from 'react';

export default class TextView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text"
               placeholder={this.props.placeholder}
               value={this.props.text}
               onChange={this.props.onFieldChanged}/>
        <div className={'validation-error ' + (this.props.showError ? 'show' : 'hidden')}>
          <span className="text">{this.props.errorText}</span>
        </div>
      </div>
    );
  }
}

TextView.propTypes = {
  showError     : React.PropTypes.bool.isRequired,
  onFieldChanged: React.PropTypes.func.isRequired
};
