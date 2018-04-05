import React from 'react';
import {Tab, Tabs as BootstrapTabs} from 'react-bootstrap';

const Tabs = (props) => {
  return (
    <BootstrapTabs defaultActiveKey={props.data[0].type} id="uncontrolled-tab-example">
      {
        props.data.map((tabData, index) => {
          return (
            <Tab key={index} eventKey={tabData.type} title={tabData.label}>
              {props.content[index]}
            </Tab>
          )
        })
      }
    </BootstrapTabs>
  )
}

Tabs.propTypes = {};

Tabs.defaultProps = {};

export default Tabs;
