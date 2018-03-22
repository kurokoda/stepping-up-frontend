import {CALL_API, CHAIN_API} from '../../middlewares/api';

export const USER_LOGIN_SUCCESS   = Symbol('USER_LOGIN_SUCCESS');
export const USER_LOGIN_ERROR     = Symbol('USER_LOGIN_ERROR');
export const USER_LOGOUT          = Symbol('USER_LOGOUT');
export const USER_SIGNUP_SUCCESS  = Symbol('USER_SIGNUP_SUCCESS');
export const USER_SIGNUP_ERROR    = Symbol('USER_SIGNUP_ERROR');
export const ADMIN_SIGNUP_SUCCESS = Symbol('ADMIN_SIGNUP_SUCCESS');
export const ADMIN_SIGNUP_ERROR   = Symbol('ADMIN_SIGNUP_ERROR');
export const USER_CREATED         = Symbol('USER_CREATED');
export const USERS_RECEIVED       = Symbol('USERS_RECEIVED');
export const USER_RECEIVED        = Symbol('USER_RECEIVED');
export const USER_UPDATED         = Symbol('USER_UPDATED');
export const USER_DELETED         = Symbol('USER_DELETED');
export const FLUSH                = Symbol('FLUSH');

const schema = 'user';
const path   = '/api/user';

export function login(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'post',
      body       : params,
      path       : `${path}/login`,
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
      path       : `${path}/logout`,
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
      path       : `${path}/signup`,
      successType: USER_SIGNUP_SUCCESS,
      errorType  : USER_SIGNUP_ERROR,
      afterSuccess,
      afterError
    }
  };
}

export function createUser(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      body       : params,
      method     : 'post',
      path       : `${path}`,
      successType: USER_CREATED,
      afterSuccess,
      afterError
    }
  };
}

export function getUsers(afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `${path}`,
      successType: USERS_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function getUser(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      body       : params,
      path       : `${path}/${params.userID}`,
      successType: USER_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function updateUser(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'patch',
      body       : params,
      path       : `${path}/${params.userID}`,
      successType: USER_UPDATED,
      afterSuccess,
      afterError
    }
  };
}

export function deleteUser(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'delete',
      body       : params,
      path       : `${path}/${params.userID}`,
      successType: USER_DELETED,
      afterSuccess,
      afterError
    }
  };
}

const getUserData = () => {
  const emails = ['asd@wsx.com', 'ffd@grs.com', 'kjh@kuy.com', 'ert@grf.com', 'xzc@deg.com', 'eef@sdf.com', 'sdf@ghj.com', 'vbf@fvc.com', 'fgt@bbn.com', 'kjh@fff.com', 'nhy@rfv.com', 'ccc@rfv.com', 'aaa@tyu.com', 'xxx@jkk.com', 'cvb@asa.com', 'fsa@asa.com', 'fds@asa.com', 'fgh@fff.com'];
  const sid    = require('shortid');
  return {
    firstName : 'Jane',
    lastName  : 'User',
    username  : 'Moonbeam',
    email     : emails[Math.floor(Math.random() * emails.length)],
    password  : 'password',
    facilityID: String(Math.floor(Math.random() * 3) + 103),
    userID    : sid.generate(),
    admin     : false,
    counselor : false,
  }
};

export function testUserActions() {
//
  const user = getUserData();
  return {
    [CHAIN_API]: [
      () => {
        return createUser(user, () => {
          console.log(`Create ${schema}: success`)
        }, () => {
          console.log(`Create ${schema}: failure`)
        });
      },
      () => {
        return getUser(user, () => {
          console.log(`Get ${schema}: success`)
        }, () => {
          console.log(`Get ${schema}: failure`)
        });
      },
      () => {
        return getUsers(() => {
          console.log(`Get all ${schema}: success`)
        }, () => {
          console.log(`Get all ${schema}: failure`)
        });
      },
      () => {
        return deleteUser(user, () => {
          console.log(`Delete ${schema}: success`)
        }, () => {
          console.log(`Delete ${schema}: failure`)
        });
      }
    ]
  };
}
