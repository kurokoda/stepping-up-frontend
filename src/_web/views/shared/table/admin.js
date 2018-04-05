import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';
import Pagination from '../pagination';

const displayCount = 10;

class AdminTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: !props.closed,
      page  : 1,
    }
  }

  componentDidMount() {
    this.props.getAdmins(1, displayCount)
  }

  onPaginationButtonClick(page) {
    this.setState({page: page});
    this.props.getAdmins(page, displayCount)
  }

  render() {
    const {admins}    = this.props;
    const adminsTotal = this.props.getAdminsTotal();
    console.log('adminsTotal', adminsTotal);
    return (
      <div>
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
            admins && admins.map((admin, index) => {
              return (
                <tr key={index}>
                  <td>{((this.state.page - 1) * displayCount) + index + 1}</td>
                  <td>{admin.get('firstName')}</td>
                  <td>{admin.get('lastName')}</td>
                  <td>{admin.get('adminID')}</td>
                  <td>
                    <Button block bsSize="small" bsStyle="info">Edit</Button>
                  </td>
                  <td>
                    <Button
                      block
                      bsSize="small"
                      bsStyle="success"
                      onClick={() => {
                        this.props.onScreenButtonClick(admin.get('adminID'))
                      }}>Screen</Button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </Table>
        <div className={css(styles.paginationContainer)}>
          {console.log('adminsTotal', adminsTotal)}
          <Pagination
            page={1}
            buttonCount={5}
            itemsTotal={adminsTotal}
            displayCount={displayCount}
            onButtonClick={this.onPaginationButtonClick.bind(this)}/>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  paginationContainer: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'center',
  }
})

AdminTable.propTypes = {};

AdminTable.defaultProps = {};

export default AdminTable;
