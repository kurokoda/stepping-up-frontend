import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class ScreensView extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const textString = 'Screens';

    return (
      <section className={css(styles.container)}>
        <div className={css(styles.content)}>
          <h2 className={css(styles.text)}>{textString}</h2>
          <br/>
          <Button block onClick={() => this.props.getScreenss()}>Show All Screenss</Button>
          <Button block onClick={() => this.props.getScreens({id: 1})}>Show Screens</Button>
          <Button block onClick={() => this.props.postScreens({id: 1})}>Create Screens</Button>
          <Button block onClick={() => this.props.patchScreens({id: 1})}>Edit Screens</Button>
          <Button block bsStyle='danger' onClick={() => this.props.deleteScreens({id: 1})}>Delete Screens</Button>
        </div>
      </section>
    );
  }
}

export default withRouter(ScreensView);

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