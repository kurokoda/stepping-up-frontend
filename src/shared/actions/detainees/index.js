import {CALL_API} from '../../middlewares/api';

export const DETAINEES_RECEIVED = Symbol('DETAINEES_RECEIVED');
export const DETAINEE_RECEIVED  = Symbol('DETAINEE_RECEIVED');
export const DETAINEE_POSTED    = Symbol('DETAINEE_POSTED');
export const DETAINEE_PATCHED   = Symbol('DETAINEE_PATCHED');
export const DETAINEE_DELETED   = Symbol('DETAINEE_DELETED');
export const FLUSH              = Symbol('FLUSH');


export function getDetainees(afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : '/api/detainee',
      successType: DETAINEES_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function getDetainee(params, afterSuccess, afterError) {
  console.log('getDetainee', params)
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/api/detainee/${params.id}`,
      successType: DETAINEE_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function postDetainee(params, afterSuccess, afterError) {
  console.log('postDetainee', params)
  return {
    [CALL_API]: {
      method     : 'post',
      body       : params,
      path       : `/api/detainee`,
      successType: DETAINEE_POSTED,
      afterSuccess,
      afterError
    }
  };
}

export function patchDetainee(params, afterSuccess, afterError) {
  console.log('patchDetainee', params)
  return {
    [CALL_API]: {
      method     : 'patch',
      body       : params,
      path       : `/api/detainee/${params.id}`,
      successType: DETAINEE_PATCHED,
      afterSuccess,
      afterError
    }
  };
}

export function deleteDetainee(params, afterSuccess, afterError) {
  console.log('deleteDetainee', params)
  return {
    [CALL_API]: {
      method     : 'delete',
      path       : `/api/detainee/${params.id}`,
      successType: DETAINEE_DELETED,
      afterSuccess,
      afterError
    }
  };
}
