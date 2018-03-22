import {CALL_API, CHAIN_API} from '../../middlewares/api';

export const DETAINEE_CREATED   = Symbol('DETAINEE_CREATED');
export const DETAINEES_RECEIVED = Symbol('DETAINEES_RECEIVED');
export const DETAINEE_RECEIVED  = Symbol('DETAINEE_RECEIVED');
export const DETAINEE_UPDATED   = Symbol('DETAINEE_UPDATED');
export const DETAINEE_DELETED   = Symbol('DETAINEE_DELETED');
export const FLUSH              = Symbol('FLUSH');

const schema = 'detainee';
const path   = '/api/detainee';

export function createDetainee(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      body       : params,
      method     : 'post',
      path       : `${path}`,
      successType: DETAINEE_CREATED,
      afterSuccess,
      afterError
    }
  };
}

export function getDetainees(afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `${path}`,
      successType: DETAINEES_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function getDetainee(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `${path}/${params.detaineeID}`,
      successType: DETAINEE_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function updateDetainee(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      body       : params,
      method     : 'patch',
      path       : `${path}/${params.detaineeID}`,
      successType: DETAINEE_UPDATED,
      afterSuccess,
      afterError
    }
  };
}

export function deleteDetainee(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'delete',
      path       : `${path}/${params.detaineeID}`,
      successType: DETAINEE_DELETED,
      afterSuccess,
      afterError
    }
  };
}

// Tests -----------------------------------------------------------------------------

const getDetaineeData = () => {
  return {
    facilityID: String(Math.floor(Math.random() * 3) + 100),
    detaineeID: String(Math.floor(Math.random() * 999) + 1000),
    gender    : 'male',
    firstName : 'Joe',
    lastName  : 'Detainee',
  }
}

export function testDetaineeActions() {
  const detainee = getDetaineeData();
  return {
    [CHAIN_API]: [
      () => {
        return createDetainee(detainee, () => {
          console.log(`Create ${schema}: success`)
        }, () => {
          console.error(`Create ${schema}: failure - ${detainee}`)
        });
      },
      () => {
        return getDetainees(() => {
          console.log(`Get all ${schema}: success`)
        }, () => {
          console.error(`Get all ${schema}: failure - ${detainee}`)
        });
      },
      () => {
        return getDetainee(detainee, () => {
          console.log(`Get ${schema}: success`)
        }, () => {
          console.error(`Get ${schema}: failure - ${detainee}`)
        });
      },
      () => {
        return deleteDetainee(detainee, () => {
          console.log(`Delete ${schema}: success`)
        }, () => {
          console.error(`Delete ${schema}: failure - ${detainee}`)
        });
      }
    ]
  };
}