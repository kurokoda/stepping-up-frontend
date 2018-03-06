import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class DetaineeView extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const textString = 'Detainees';

    return (
      <section className={css(styles.container)}>
        <div className={css(styles.content)}>
          <h2 className={css(styles.text)}>{textString}</h2>
          <br/>
          <Button block onClick={() => this.props.getDetainees()}>Show All Detainees</Button>
          <Button block onClick={() => this.props.getDetainee({id: 1})}>Show Detainee</Button>
          <Button block onClick={() => this.props.postDetainee({id: 1})}>Create Detainee</Button>
          <Button block onClick={() => this.props.patchDetainee({id: 1})}>Edit Detainee</Button>
          <Button block bsStyle='danger' onClick={() => this.props.deleteDetainee({id: 1})}>Delete Detainee</Button>
        </div>
      </section>
    );
  }
}

export default withRouter(DetaineeView);

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