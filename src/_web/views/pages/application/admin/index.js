import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class AdminView extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const textString = 'Users';

    return (
      <section className={css(styles.container)}>
        <div className={css(styles.content)}>
          <h2 className={css(styles.text)}>{textString}</h2>
          <br/>
          <Button block onClick={() => this.props.getAdmins()}>Show All Users</Button>
          <Button block onClick={() => this.props.getAdmin({id: 1})}>Show User</Button>
          <Button block onClick={() => this.props.postAdmin({id: 1})}>Create User</Button>
          <Button block onClick={() => this.props.patchAdmin({id: 1})}>Edit User</Button>
          <Button block bsStyle='danger' onClick={() => this.props.deleteAdmin({id: 1})}>Delete User</Button>
        </div>
      </section>
    );
  }
}

export default withRouter(AdminView);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    display        : 'flex',
    justifyContent : 'center',
    textAlign      : 'center',
    height         : '100vh',
  },
  content  : {
    WebkitBoxFlex: 0,
    WebkitFlex   : 'none',
    MsFlex       : 'none',
    flex         : 'none',
    minWidth     : '300px',
    maxWidth     : '50%',
  },
  text     : {
    display: 'block',
  },
});