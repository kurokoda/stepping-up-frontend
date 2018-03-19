import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import config from '../../../../../shared/config';

class GetDetainees extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  getData() {
    fetch(`${config.API_BASE_URL}/test`)
    .then(response => console.log(response))
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        {this.state.data}
      </div>
    );
  }
}

GetDetainees.propTypes = {};

GetDetainees.defaultProps = {};

export default GetDetainees;

const styles = StyleSheet.create({
  container: {},
});