import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteScreen, getScreen, getScreens, patchScreen, postScreen} from '../../actions/screen';

class ScreenContainer extends Component {
  static propTypes = {
    'Layout': PropTypes.func.isRequired
  };

  static defaultProps = {};

  render() {
    const {Layout}    = this.props;
    const layoutProps = {
      getScreen   : this.props.getScreen,
      getScreens  : this.props.getScreens,
      deleteScreen: this.props.deleteScreen,
      patchScreen : this.props.patchScreen,
      postScreen  : this.props.postScreen,
    };

    return (
      <Layout {...layoutProps}/>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  getScreen,
  getScreens,
  deleteScreen,
  patchScreen,
  postScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenContainer);
