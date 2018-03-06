import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class ApiContainer extends Component {
  render() {
    const {Layout} = this.props;

    return (
      <Layout/>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

ApiContainer.propTypes = {
  'Layout': PropTypes.func.isRequired
};

ApiContainer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ApiContainer);
