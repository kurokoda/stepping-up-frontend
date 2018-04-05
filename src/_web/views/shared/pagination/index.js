import {times} from 'lodash';
import React, {Component} from 'react';
import {Pagination as BootstrapPagination} from 'react-bootstrap';

class Pagination extends Component {

  constructor(props) {
    super(props);
    this.onPageButtonClick.bind(this);
    this.onSkipButtonClick.bind(this);
    this.state = {
      buttons    : times(this.props.buttonCount, String),
      delta      : 1,
      activeIndex: 1,
    }
  }

  onSkipButtonClick(value) {
    const currentDelta = this.state.delta;
    const newDelta     = currentDelta + value;
    if (value < 0 && currentDelta > 1) {
      this.setState({delta: newDelta})
    } else if (value > 0 && currentDelta < this.maxDelta) {
      this.setState({delta: newDelta})
    }
  }

  onPageButtonClick(pageNumber) {
    this.setState({activeIndex: pageNumber})
    this.props.onButtonClick(pageNumber);
  }

  getPageNumber(position) {
    return position + ((this.state.buttons.length * this.state.delta) - this.state.buttons.length)
  }

  isNextDisabled() {
    return this.state.delta !== this.maxDelta;
  }

  isNextDisabled() {
    return this.state.delta === this.maxDelta;
  }

  isPrevDisabled() {
    return this.state.delta === 1;
  }

  render() {
    this.pageCount = Math.ceil(this.props.itemsTotal / this.props.displayCount);
    this.maxDelta  = Math.ceil(this.pageCount / this.props.buttonCount);
    console.log('--- this.props.itemsTotal', this.props.itemsTotal);
    return (
      <BootstrapPagination bsSize='large'>
        <BootstrapPagination.Prev disabled={this.isPrevDisabled()} onClick={() => {
          !this.isPrevDisabled() && this.onSkipButtonClick(-1);
        }}/>
        { this.state.buttons.map((count, index) => {
          const position   = index + 1;
          const pageNumber = this.getPageNumber(position);
          console.log(pageNumber, this.pageCount);
          return ( pageNumber <= this.pageCount ?
              <BootstrapPagination.Item
                active={this.state.activeIndex === pageNumber}
                key={index}
                onClick={() => {
                  this.onPageButtonClick(pageNumber);
                }}>
                {pageNumber}
              </BootstrapPagination.Item>
              :
              null
          )
        })
        }
        <BootstrapPagination.Next disabled={this.isNextDisabled()} onClick={() => {
          !this.isNextDisabled() && this.onSkipButtonClick(1);
        }}/>
      </BootstrapPagination>
    );
  }
}

Pagination.propTypes = {};

Pagination.defaultProps = {};

export default Pagination;