import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';
import Pagination from '../pagination';

const displayCount = 10;

class DetaineeTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: !props.closed,
      page  : 1,
    }
  }

  componentDidMount() {
    this.props.getDetainees(1, displayCount)
  }

  onPaginationButtonClick(page) {
    this.setState({page: page});
    this.props.getDetainees(page, displayCount)
  }

  render() {
    const {detainees}    = this.props;
    const detaineesTotal = this.props.getDetaineesTotal();
    console.log('detaineesTotal', detaineesTotal);
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
            detainees && detainees.map((detainee, index) => {
              return (
                <tr key={index}>
                  <td>{((this.state.page - 1) * displayCount) + index + 1}</td>
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
        <div className={css(styles.paginationContainer)}>
          {console.log('detaineesTotal', detaineesTotal)}
          <Pagination
            page={1}
            buttonCount={7}
            itemsTotal={detaineesTotal}
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

DetaineeTable.propTypes = {};

DetaineeTable.defaultProps = {};

export default DetaineeTable;
