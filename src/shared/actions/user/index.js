import {CALL_API} from '../../middlewares/api';

export const USER_LOGIN_SUCCESS   = Symbol('USER_LOGIN_SUCCESS');
export const USER_LOGIN_ERROR     = Symbol('USER_LOGIN_ERROR');
export const USER_LOGOUT          = Symbol('USER_LOGOUT');
export const USER_SIGNUP_SUCCESS  = Symbol('USER_SIGNUP_SUCCESS');
export const USER_SIGNUP_ERROR    = Symbol('USER_SIGNUP_ERROR');
export const ADMIN_SIGNUP_SUCCESS = Symbol('ADMIN_SIGNUP_SUCCESS');
export const ADMIN_SIGNUP_ERROR   = Symbol('ADMIN_SIGNUP_ERROR');


export function login(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'post',
      body       : params,
      path       : '/api/user/login',
      successType: USER_LOGIN_SUCCESS,
      errorType  : USER_LOGIN_ERROR,
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
      path       : '/api/user/logout',
      successType: USER_LOGOUT,
      afterSuccess,
      afterError
    }
  };
}

export function signupUser(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'post',
      body       : params,
      path       : '/api/user/signup',
      successType: USER_SIGNUP_SUCCESS,
      errorType  : USER_SIGNUP_ERROR,
      afterSuccess,
      afterError
    }
  };
}

export function signupAdmin(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'post',
      body       : params,
      path       : '/api/user/signupAdmin',
      successType: ADMIN_SIGNUP_SUCCESS,
      errorType  : ADMIN_SIGNUP_ERROR,
      afterSuccess,
      afterError
    }
  };
}
