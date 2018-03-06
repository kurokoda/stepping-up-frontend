import {css, StyleSheet} from 'aphrodite';

import React from 'react';
import {Panel} from 'react-bootstrap';

const Admin = ({...props}) => {

  return (
    <div className={`container ${css(styles.container)}`}>
      <h6>ADMIN DASHBOARD</h6>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <Panel>
            <Panel.Heading>Users</Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
          </Panel>
        </div>
        <div className='col-sm-12 col-md-6'>
          <Panel>
            <Panel.Heading>Counselors</Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
          </Panel>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-4'>
          <Panel>
            <Panel.Heading>Detainees</Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
          </Panel>
        </div>
        <div className='col-sm-12 col-md-4'>
          <Panel>
            <Panel.Heading>Panel heading without a title</Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
          </Panel>
        </div>
        <div className='col-sm-12 col-md-4'>
          <Panel>
            <Panel.Heading>Panel heading without a title</Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
          </Panel>
        </div>
      </div>
    </div>
  );
};

Admin.propTypes = {};

Admin.defaultProps = {};

export default Admin;

const styles = StyleSheet.create({
  container: {},
});