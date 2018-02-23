import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class AboutView extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const buttonTitle = 'Go To Home';
    const textString  = 'About View';

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
    this.props.history.push('/')
  }
}

export default withRouter(AboutView);

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
