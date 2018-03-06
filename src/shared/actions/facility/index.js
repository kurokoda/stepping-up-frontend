import {CALL_API} from '../../middlewares/api';

export const FACILITIES_RECEIVED = Symbol('FACILITIES_RECEIVED');
export const FACILITY_RECEIVED   = Symbol('FACILITY_RECEIVED');
export const FACILITY_POSTED     = Symbol('FACILITY_POSTED');
export const FACILITY_PATCHED    = Symbol('FACILITY_PATCHED');
export const FACILITY_DELETED    = Symbol('FACILITY_DELETED');

export function getFacilities(afterSuccess, afterError) {
  console.log('getFacilities');
  return {
    [CALL_API]: {
      method     : 'get',
      path       : '/api/facility',
      successType: FACILITIES_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function getFacility(params, afterSuccess, afterError) {
  console.log('getFacility', params)
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/api/facility/${params.id}`,
      successType: FACILITY_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function postFacility(params, afterSuccess, afterError) {
  console.log('postFacility', params)
  return {
    [CALL_API]: {
      method     : 'post',
      body       : params,
      path       : `/api/facility`,
      successType: FACILITY_POSTED,
      afterSuccess,
      afterError
    }
  };
}

export function patchFacility(params, afterSuccess, afterError) {
  console.log('patchFacility', params)
  return {
    [CALL_API]: {
      method     : 'patch',
      body       : params,
      path       : `/api/facility/${params.id}`,
      successType: FACILITY_PATCHED,
      afterSuccess,
      afterError
    }
  };
}

export function deleteFacility(params, afterSuccess, afterError) {
  console.log('deleteFacility', params)
  return {
    [CALL_API]: {
      method     : 'delete',
      path       : `/api/facility/${params.id}`,
      successType: FACILITY_DELETED,
      afterSuccess,
      afterError
    }
  };
}
