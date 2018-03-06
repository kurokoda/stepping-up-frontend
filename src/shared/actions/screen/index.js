import {CALL_API} from '../../middlewares/api';

export const SCREENS_RECEIVED = Symbol('SCREENS_RECEIVED');
export const SCREEN_RECEIVED  = Symbol('SCREEN_RECEIVED');
export const SCREEN_POSTED    = Symbol('SCREEN_POSTED');
export const SCREEN_PATCHED   = Symbol('SCREEN_PATCHED');
export const SCREEN_DELETED   = Symbol('SCREEN_DELETED');

export function getScreens(afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : '/api/screen',
      successType: SCREENS_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function getScreen(params, afterSuccess, afterError) {
  console.log('getScreen', params)
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/api/screen/${params.id}`,
      successType: SCREEN_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function postScreen(params, afterSuccess, afterError) {
  console.log('postScreen', params)
  return {
    [CALL_API]: {
      method     : 'post',
      body       : params,
      path       : `/api/screen`,
      successType: SCREEN_POSTED,
      afterSuccess,
      afterError
    }
  };
}

export function patchScreen(params, afterSuccess, afterError) {
  console.log('patchScreen', params)
  return {
    [CALL_API]: {
      method     : 'patch',
      body       : params,
      path       : `/api/screen/${params.id}`,
      successType: SCREEN_PATCHED,
      afterSuccess,
      afterError
    }
  };
}

export function deleteScreen(params, afterSuccess, afterError) {
  console.log('deleteScreen', params)
  return {
    [CALL_API]: {
      method     : 'delete',
      path       : `/api/screen/${params.id}`,
      successType: SCREEN_DELETED,
      afterSuccess,
      afterError
    }
  };
}
