import React from 'react';
import {Pagination} from 'react-bootstrap';

const PaginationBar = ({...props}) => {

  return (
    <Pagination>
      <Pagination.Prev />
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  );
};

PaginationBar.propTypes = {};

PaginationBar.defaultProps = {};

export default PaginationBar;