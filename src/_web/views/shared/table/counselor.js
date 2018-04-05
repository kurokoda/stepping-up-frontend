import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';
import Pagination from '../pagination';

const displayCount = 10;

class CounselorTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: !props.closed,
      page  : 1,
    }
  }

  componentDidMount() {
    this.props.getCounselors(1, displayCount)
  }

  onPaginationButtonClick(page) {
    this.setState({page: page});
    this.props.getCounselors(page, displayCount)
  }

  render() {
    const {counselors}    = this.props;
    const counselorsTotal = this.props.getCounselorsTotal();
    console.log('counselorsTotal', counselorsTotal);
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
            counselors && counselors.map((counselor, index) => {
              return (
                <tr key={index}>
                  <td>{((this.state.page - 1) * displayCount) + index + 1}</td>
                  <td>{counselor.get('firstName')}</td>
                  <td>{counselor.get('lastName')}</td>
                  <td>{counselor.get('counselorID')}</td>
                  <td>
                    <Button block bsSize="small" bsStyle="info">Edit</Button>
                  </td>
                  <td>
                    <Button
                      block
                      bsSize="small"
                      bsStyle="success"
                      onClick={() => {
                        this.props.onScreenButtonClick(counselor.get('counselorID'))
                      }}>Screen</Button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </Table>
        <div className={css(styles.paginationContainer)}>
          {console.log('counselorsTotal', counselorsTotal)}
          <Pagination
            page={1}
            buttonCount={5}
            itemsTotal={counselorsTotal}
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

CounselorTable.propTypes = {};

CounselorTable.defaultProps = {};

export default CounselorTable;
