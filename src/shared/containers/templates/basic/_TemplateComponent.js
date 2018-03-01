import React, {Component} from 'react';
import {connect} from 'react-redux';
//
class TemplateComponent extends Component {

  static propTypes = {};

  render() {
    return (
      <div className="templateComponent">Template</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export {TemplateComponent};
export default connect(mapStateToProps)(TemplateComponent);
