import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
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