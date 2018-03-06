import {css, StyleSheet} from 'aphrodite';
import React from 'react';
import COLOR from '../../../../../shared/constants/colors';

const DetaineeTile = ({...props}) => {

  const firstName = props.detainee.get('firstName');
  const lastName  = props.detainee.get('lastName');

  return (
    <div className={css(styles.container)}>
      <div>{`${lastName}, ${firstName}`}</div>
    </div>
  );
};

DetaineeTile.propTypes = {};

DetaineeTile.defaultProps = {};

export default DetaineeTile;

const styles = StyleSheet.create({
  container: {
    outline     : `${COLOR.GREEN_LIGHT} 1px solid`,
    textAlign   : 'left',
    padding     : '10px',
    borderRadius: '10px',
    height      : '40px',
    width       : '300px',
    //marginBottom: '10px',
  },
});