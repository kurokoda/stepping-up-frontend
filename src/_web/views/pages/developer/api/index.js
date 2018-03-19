import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Panel from '../../../shared/Panel';
import GetDetainees from './GetDetainees'

class ApiView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      panelOneOpen: true,
      panelTwoOpen: true,
    }
  }

  render() {
    return (
      <div className={`container ${css(styles.container)}`}>
        <h6>ROOT DASHBOARD</h6>
        <div className='row'>
          <Panel title='FOO' closed={true}>{<GetDetainees/>}</Panel>
          <Panel title='FOO' closed={true}/>
          <Panel title='FOO' closed={true}/>
        </div>
        <div className='row'>
          <Panel title='FOO' closed={true}/>
          <Panel title='FOO' closed={true}/>
          <Panel title='FOO' closed={true}/>
        </div>
        <div className='row'>
          <Panel title='FOO' closed={true}/>
          <Panel title='FOO' closed={true}/>
          <Panel title='FOO' closed={true}/>
        </div>
      </div>
    );
  }
}

ApiView.propTypes = {};

ApiView.defaultProps = {};

export default withRouter(ApiView);

const styles = StyleSheet.create({
  container: {},
});