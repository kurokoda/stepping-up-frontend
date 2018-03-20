import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import config from '../../../../../../shared/config';

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      panelOneOpen: true,
      panelTwoOpen: true,
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
      <div className={`container ${css(styles.container)}`}>
        <h6>USER DASHBOARD</h6>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <Panel expanded={this.state.panelOneOpen} onToggle={() => {
            }}>
              <Panel.Heading
                onClick={() => this.setState({
                  panelOneOpen: !this.state.panelOneOpen,
                })}>Register Detainee</Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>Panel content</Panel.Body>
              </Panel.Collapse>
            </Panel>
          </div>
          <div className='col-sm-12 col-md-6'>
            <Panel expanded={this.state.panelTwoOpen} onToggle={() => {
            }}>
              <Panel.Heading
                onClick={() => this.setState({
                  panelTwoOpen: !this.state.panelTwoOpen,
                })}>Register Detainee</Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>Panel content</Panel.Body>
              </Panel.Collapse>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {};

User.defaultProps = {};

export default User;

const styles = StyleSheet.create({
  container: {},
});