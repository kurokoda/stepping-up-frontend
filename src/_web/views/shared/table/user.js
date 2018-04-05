import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';
import Pagination from '../pagination';

const displayCount = 10;

class UserTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: !props.closed,
      page  : 1,
    }
  }

  componentDidMount() {
    this.props.getUsers(1, displayCount)
  }

  onPaginationButtonClick(page) {
    this.setState({page: page});
    this.props.getUsers(page, displayCount)
  }

  render() {
    const {users}    = this.props;
    const usersTotal = this.props.getUsersTotal();
    console.log('usersTotal', usersTotal);
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
            users && users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{((this.state.page - 1) * displayCount) + index + 1}</td>
                  <td>{user.get('firstName')}</td>
                  <td>{user.get('lastName')}</td>
                  <td>{user.get('userID')}</td>
                  <td>
                    <Button block bsSize="small" bsStyle="info">Edit</Button>
                  </td>
                  <td>
                    <Button
                      block
                      bsSize="small"
                      bsStyle="success"
                      onClick={() => {
                        this.props.onScreenButtonClick(user.get('userID'))
                      }}>Screen</Button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </Table>
        <div className={css(styles.paginationContainer)}>
          {console.log('usersTotal', usersTotal)}
          <Pagination
            page={1}
            buttonCount={5}
            itemsTotal={usersTotal}
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

UserTable.propTypes = {};

UserTable.defaultProps = {};

export default UserTable;
