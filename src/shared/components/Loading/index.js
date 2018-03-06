import React, {Component} from 'react';
import {connect} from 'react-redux';
//
class Loading extends Component {

  render() {
    return (
      <div id="Loading">Loading</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

Loading.propTypes = {};

export {Loading};
export default connect(mapStateToProps)(Loading);
