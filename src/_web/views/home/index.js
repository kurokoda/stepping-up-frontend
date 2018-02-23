import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class HomeView extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const buttonTitle = 'Go To About';
    const textString  = 'Home View';

    return (
      <section style={styles.container}>
        <div style={styles.content}>
          <span style={styles.text}>{textString}</span>
          <Button onClick={this.onClick}>{buttonTitle}</Button>
        </div>
      </section>
    );
  }

  onClick = () => {
    this.props.history.push('/about')
  }
}

export default withRouter(HomeView);

const styles = {
  container: {
    backgroundColor: '#FFF',
    display        : 'flex',
    alignItems     : 'center',
    justifyContent : 'center',
    textAlign      : 'center',
    height         : '100vh',
  },
  content  : {
    WebkitBoxFlex: 0,
    WebkitFlex   : 'none',
    MsFlex       : 'none',
    flex         : 'none',
    maxWidth     : '50%',
  },
  text     : {
    display: 'block',
    color  : '#0F0',
  },
};