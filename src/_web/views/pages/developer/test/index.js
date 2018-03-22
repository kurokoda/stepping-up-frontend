import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Panel from '../../../shared/Panel';

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
          <div className='col-sm-12 col-md-4'>
            <Panel title='FOO' closed={true}/>
          </div>
          <div className='col-sm-12 col-md-4'>
            <Panel title='FOO' closed={true}/>
          </div>
          <div className='col-sm-12 col-md-4'>
            <Panel title='FOO' closed={true}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <Panel title='FOO' closed={true}/>
          </div>
          <div className='col-sm-12 col-md-6'>
            <Panel title='FOO' closed={true}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <Panel title='FOO' closed={true}/>
          </div>
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