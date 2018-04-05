import {CALL_API, CHAIN_API} from '../../middlewares/api';

export const FACILITY_CREATED             = Symbol('FACILITY_CREATED');
export const FACILITIES_RECEIVED          = Symbol('FACILITIES_RECEIVED');
export const FACILITY_RECEIVED            = Symbol('FACILITY_RECEIVED');
export const FACILITY_UPDATED             = Symbol('FACILITY_UPDATED');
export const FACILITY_DELETED             = Symbol('FACILITY_DELETED');
export const FACILITY_USERS_RECEIVED      = Symbol('FACILITY_USERS_RECEIVED');
export const FACILITY_COUNSELORS_RECEIVED = Symbol('FACILITY_COUNSELORS_RECEIVED');
export const FACILITY_ADMINS_RECEIVED     = Symbol('FACILITY_ADMINS_RECEIVED');
export const FACILITY_DETAINEES_RECEIVED  = Symbol('FACILITY_DETAINEES_RECEIVED');
export const FLUSH                        = Symbol('FLUSH');

const schema = 'facility';

export function createFacility(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      body       : params,
      method     : 'post',
      path       : `/api/facility`,
      successType: FACILITY_CREATED,
      afterSuccess,
      afterError
    }
  };
}

export function getFacilities(afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/api/facility`,
      successType: FACILITIES_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function getFacility(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/api/facility/${params.facilityID}`,
      successType: FACILITY_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function getFacilityUsers(afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/api/facility/users`,
      successType: FACILITY_USERS_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function getFacilityCounselors(afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/api/facility/counselors`,
      successType: FACILITY_COUNSELORS_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function getFacilityAdmins(afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/api/facility/admins`,
      successType: FACILITY_ADMINS_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function getFacilityDetainees(afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/api/facility/detainees`,
      successType: FACILITY_DETAINEES_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function updateFacility(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      body       : params,
      method     : 'patch',
      path       : `/api/facility/${params.facilityID}`,
      successType: FACILITY_UPDATED,
      afterSuccess,
      afterError
    }
  };
}

export function deleteFacility(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'delete',
      path       : `/api/facility/${params.facilityID}`,
      successType: FACILITY_DELETED,
      afterSuccess,
      afterError
    }
  };
}

export function getUsersFromFacilityByRange(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/api/facility/users`,
      query      : params,
      successType: FACILITY_USERS_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function getCounselorsFromFacilityByRange(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/api/facility/counselors`,
      query      : params,
      successType: FACILITY_COUNSELORS_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function getDetaineesFromFacilityByRange(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/api/facility/detainees`,
      query      : params,
      successType: FACILITY_DETAINEES_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

// Tests -----------------------------------------------------------------------------

const getFacilityData = () => {
  return {
    facilityID: String(Math.floor(Math.random() * 1000) + 103),
    name      : 'The Facility',
    address   : '1 Main St.',
    city      : 'New York',
    state     : 'NY',
    zip       : '10000',
  }
};

export function testFacilityActions() {
  const facility = getFacilityData();
  return {
    [CHAIN_API]: [
      () => {
        return createFacility(facility, () => {
          console.log(`Create ${schema}: success`)
        }, () => {
          console.log(`Create ${schema}: failure`)
        });
      },
      () => {
        return getFacility(facility, () => {
          console.log(`Get ${schema}: success`)
        }, () => {
          console.log(`Get ${schema}: failure`)
        });
      },
      () => {
        return getFacilities(() => {
          console.log(`Get all ${schema}: success`)
        }, () => {
          console.log(`Get all ${schema}: failure`)
        });
      },
      () => {
        return deleteFacility(facility, () => {
          console.log(`Delete ${schema}: success`)
        }, () => {
          console.log(`Delete ${schema}: failure`)
        });
      }
    ]
  };
}
