import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';

class CounselorTable extends Component {

  constructor(props) {
    super(props);
    const isOpen = !props.closed;
    this.state   = {
      isOpen,
    }
  }

  render() {
    const {counselors} = this.props;
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
          counselors && counselors.map((detainee, index) => {
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
                    onClick={() => {
                      this.props.onScreenButtonClick(detainee.get('detaineeID'))
                    }}>Screen</Button>
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

CounselorTable.propTypes = {};

CounselorTable.defaultProps = {};

export default CounselorTable;
