import {CALL_API, CHAIN_API} from '../../middlewares/api';

export const FACILITY_CREATED    = Symbol('FACILITY_CREATED');
export const FACILITIES_RECEIVED = Symbol('FACILITIES_RECEIVED');
export const FACILITY_RECEIVED   = Symbol('FACILITY_RECEIVED');
export const FACILITY_UPDATED    = Symbol('FACILITY_UPDATED');
export const FACILITY_DELETED    = Symbol('FACILITY_DELETED');
export const FLUSH               = Symbol('FLUSH');

const schema = 'facility';
const path   = '/api/facility';

export function createFacility(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      body       : params,
      method     : 'post',
      path       : `${path}`,
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
      path       : `${path}`,
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
      path       : `${path}/${params.facilityID}`,
      successType: FACILITY_RECEIVED,
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
      path       : `${path}/${params.facilityID}`,
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
      path       : `${path}/${params.facilityID}`,
      successType: FACILITY_DELETED,
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
