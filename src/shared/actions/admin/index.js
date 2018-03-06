import {CALL_API} from '../../middlewares/api';

export const ADMINS_RECEIVED = Symbol('ADMINS_RECEIVED');
export const ADMIN_RECEIVED  = Symbol('ADMIN_RECEIVED');
export const ADMIN_POSTED    = Symbol('ADMIN_POSTED');
export const ADMIN_PATCHED   = Symbol('ADMIN_PATCHED');
export const ADMIN_DELETED   = Symbol('ADMIN_DELETED');

export function getAdmins(afterSuccess, afterError) {
  console.log('getAdmins')
  return {
    [CALL_API]: {
      method     : 'get',
      path       : '/api/admin',
      successType: ADMINS_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function getAdmin(params, afterSuccess, afterError) {
  console.log('getAdmin', params)
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/api/admin/${params.id}`,
      successType: ADMIN_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function postAdmin(params, afterSuccess, afterError) {
  console.log('postAdmin', params)
  return {
    [CALL_API]: {
      method     : 'post',
      body       : params,
      path       : `/api/admin`,
      successType: ADMIN_POSTED,
      afterSuccess,
      afterError
    }
  };
}

export function patchAdmin(params, afterSuccess, afterError) {
  console.log('patchAdmin', params)
  return {
    [CALL_API]: {
      method     : 'patch',
      body       : params,
      path       : `/api/admin/${params.id}`,
      successType: ADMIN_PATCHED,
      afterSuccess,
      afterError
    }
  };
}

export function deleteAdmin(params, afterSuccess, afterError) {
  console.log('deleteAdmin', params)
  return {
    [CALL_API]: {
      method     : 'delete',
      path       : `/api/admin/${params.id}`,
      successType: ADMIN_DELETED,
      afterSuccess,
      afterError
    }
  };
}
