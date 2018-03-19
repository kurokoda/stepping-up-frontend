import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {Panel as BootstrapPanel} from 'react-bootstrap';

class Panel extends Component {

  constructor(props) {
    super(props);
    const isOpen = props.closed ? false : true;
    this.state   = {
      isOpen,
    }
  }

  render() {
    return (
      <div className='col-sm-12 col-md-4'>
        <BootstrapPanel onToggle={()=>{}}expanded={this.state.isOpen}>
          <BootstrapPanel.Heading
            onClick={() => this.setState({
              isOpen: !this.state.isOpen,
            })}>{this.props.title}</BootstrapPanel.Heading>
          <BootstrapPanel.Collapse>
            <BootstrapPanel.Body>{this.props.children}</BootstrapPanel.Body>
          </BootstrapPanel.Collapse>
        </BootstrapPanel>
      </div>
    );
  }
}

Panel.propTypes = {};

Panel.defaultProps = {};

export default Panel;
