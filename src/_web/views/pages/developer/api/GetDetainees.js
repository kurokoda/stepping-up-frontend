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
    fetch(`${config.API_BASE_URL}/test`, {
      method     : 'GET',
      credentials: 'include',
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log('foo', json)
    })
    .catch((err) => {
      console.log(err)
    })
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
