import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import firebase from '../../../shared/firebase';

class AboutView extends Component {

  // Props -------------------------------------------------------------

  static propTypes = {};

  static defaultProps = {};

  // React -------------------------------------------------------------

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentWillMount() {
    let messageRefs = firebase.database().ref('messages').orderByKey().limitToLast(100);
    let messages    = [];
    messageRefs.on('child_added', message => {
      messages.push({text: message.val(), id: message.key});
      this.setState({messages});
    })
  }

  render() {
    const buttonTitle = 'Go To Home';
    const textString  = 'About View';

    return (
      <section style={styles.container}>
        <div style={styles.content}>
          <span style={styles.text}>{textString}</span>
          <form onSubmit={this.onSubmit}>
            <input type="text" ref={ el => this.input = el }/>
            <input type="submit"/>
            {
              this.state.messages.map((message) => {
                return <p key={message.id}>{message.text}</p>
              })
            }
          </form>
          <Button onClick={this.onClick}>{buttonTitle}</Button>
        </div>
      </section>
    );
  }

  // Non-React -------------------------------------------------------------

  onSubmit = (event) => {
    firebase.database().ref('messages').push(this.input.value);
    this.input.value = '';
    event.preventDefault();
  };

  onClick = () => {
    this.props.history.push('/')
  }
}

// Exports -------------------------------------------------------------

export default withRouter(AboutView);

// Styles -------------------------------------------------------------

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
