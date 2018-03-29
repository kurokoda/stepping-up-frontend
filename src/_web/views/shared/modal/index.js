import PropTypes from 'prop-types';
import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';

const ModalComponent = ({...props}) => {

  const Content = props.config.get('Content');
  const title   = props.config.get('title');

  return (
    <div>
      <Modal
        isOpen={!!Content}
        onAfterOpen={props.config.get('onAfterOpen')}
        onRequestClose={props.config.get('onRequestClose')}
        style={props.config.get('styles') || styles}
        contentLabel={props.config.get('contentLabel')}>
        { title && (
          <h2>{title}</h2>
        )}
        <Content/>
        <Button
          block
          bsSize="small"
          bsStyle="info"
          onClick={props.close}>
          Close
        </Button>
      </Modal>
    </div>
  );
};

Modal.setAppElement('#root');

ModalComponent.propTypes = {
  'config': PropTypes.object,
};

export default ModalComponent;

const styles = {
  content: {
    top        : '50%',
    left       : '50%',
    right      : 'auto',
    bottom     : 'auto',
    marginRight: '-50%',
    transform  : 'translate(-50%, -50%)'
  }
};