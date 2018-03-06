import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/user';

class LogoutContainer extends Component {
  render() {
    const {Layout} = this.props;
    const props    = {
      logout
    };

    return (
      <Layout {...props}/>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {logout};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer);

mapDispatchToProps.propTypes = {
  'Layout': PropTypes.func.isRequired,
  'logout': PropTypes.func.isRequired,
};

mapDispatchToProps.defaultProps = {};
