import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import TemplateComponent from '../../../../_web/views/_TemplateComponent';

class TemplateContainer extends Component {

  static propTypes = {};

  render() {
    const componentProps = {};
    return (
      <div className="templateContainer">
        <Helmet
          title={'Template'}
        />
        <TemplateComponent {...componentProps}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export {TemplateContainer};
export default connect(mapStateToProps, {})(TemplateContainer);
