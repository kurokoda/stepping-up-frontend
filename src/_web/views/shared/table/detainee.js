import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';

class DetaineeTable extends Component {

  constructor(props) {
    super(props);
    const isOpen = !props.closed;
    this.state   = {
      isOpen,
    }
  }

  render() {
    const {detainees} = this.props;
    return (
      <Table responsive>
        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>ID</th>
        </tr>
        </thead>
        <tbody>
        {
          detainees.map((detainee, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{detainee.get('firstName')}</td>
                <td>{detainee.get('lastName')}</td>
                <td>{detainee.get('detaineeID')}</td>
                <td>
                  <Button block bsSize="small" bsStyle="info">Edit</Button>
                </td>
                <td>
                  <Button
                    block
                    bsSize="small"
                    bsStyle="success"
                    onClick={()=>{this.props.onScreenButtonClick(detainee.get('detaineeID'))}}>Screen</Button>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </Table>
    )
  }
}

DetaineeTable.propTypes = {};

DetaineeTable.defaultProps = {};

export default DetaineeTable;
