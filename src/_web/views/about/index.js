import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import firebase from '../../../shared/firebase';

class AboutView extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentWillMount() {
    let messages = firebase.database().ref('messages').orderByKey().limitToLast(100);
    messages.on('child_added', snapshot => {
      let message = {text: snapshot.val(), id: snapshot.key};
      this.setState({messages: [message].concat(this.state.messages)});
    })
  }

  onSubmit = (event) => {
    firebase.database().ref('messages').push(this.input.value);
    this.input.value = '';
    event.preventDefault();
  }

  render() {
    const buttonTitle = 'Go To Home';
    const textString  = 'About View';

    return (
      <section style={styles.container}>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref={ el => this.input = el }/>
          <input type="submit"/>
          <ul>
            {
              this.state.messages.map(message => <li key={message.id}>{message.text}</li>)
            }
          </ul>
        </form>
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
