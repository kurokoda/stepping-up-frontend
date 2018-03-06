import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class ApiView extends Component {

  render() {
    const textString = 'Facilities';

    return (
      <section className={css(styles.container)}>
        <div className={css(styles.content)}>
          <h2 className={css(styles.text)}>{textString}</h2>
          <br/>
          <Button block onClick={() => this.props.getFacilities()}>Show All Facilities</Button>
          <Button block onClick={() => this.props.getApi({id: 1})}>Show Api</Button>
          <Button block onClick={() => this.props.postApi({id: 1})}>Create Api</Button>
          <Button block onClick={() => this.props.patchApi({id: 1})}>Edit Api</Button>
          <Button block bsStyle='danger' onClick={() => this.props.deleteApi({id: 1})}>Delete Api</Button>
        </div>
      </section>
    );
  }
}

ApiView.propTypes = {};

ApiView.defaultProps = {};

export default withRouter(ApiView);

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