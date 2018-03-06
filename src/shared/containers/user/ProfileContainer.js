import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


class ProfileContainer extends Component {
  static propTypes = {
    'Layout': PropTypes.func.isRequired
  };

  static defaultProps = {};

  render() {
    if (!this.props.user) {
      return <Redirect to='/'/>;
    }

    const {Layout} = this.props;

    return (
      <Layout/>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
