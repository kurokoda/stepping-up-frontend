import {throttle} from 'lodash';
import PropTypes from 'prop-types';
import React, {Component} from 'react';


class ActivityMonitor extends Component {

  constructor(props) {
    super(props);
    this.debounceDelay = props.debounceDelay || 1000;
    this.intervalDelay = props.intervalDelay || 1000;
  }

  componentDidMount() {
    window.addEventListener(this.props.activity, throttle(this.onActivity.bind(this), 1000));
    this.interval = window.setInterval(this.onInterval.bind(this), this.intervalDelay);
  }

  componentWillUnmount() {
    window.removeEventListener(this.props.activity, this.onActivity.bind(this));
    this.interval();
  }

  onActivity() {
    this.props.onActivity();
  }

  onInterval() {
    this.props.onInterval();
  }

  render() {
    return null;
  }
}

ActivityMonitor.propTypes = {
  debounceDelay: PropTypes.number,
  intervalDelay: PropTypes.number,
  activity     : PropTypes.string.isRequired,
  onActivity   : PropTypes.func.isRequired,
};

export default ActivityMonitor;