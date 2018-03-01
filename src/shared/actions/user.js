import {CALL_API} from '../middlewares/api';

export const LOG_IN  = Symbol('LOG_IN');
export const LOG_OUT = Symbol('LOG_OUT');

export function login(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'post',
      body       : params,
      path       : '/api/login',
      successType: LOG_IN,
      afterSuccess,
      afterError
    }
  };
}

export function logout(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'post',
      body       : params,
      path       : '/api/logout',
      successType: LOG_OUT,
      afterSuccess,
      afterError
    }
  };
}
