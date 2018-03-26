import {CHAIN_API} from '../../middlewares/api';
import {getFacilityCounselors, getFacilityDetainees, getFacilityUsers} from '../facility';

export function fetchDashboardData(onFinalSuccess, onFinalError) {
  return {
    [CHAIN_API]: [
      () => {
        return getFacilityCounselors(null, onFinalError);
      },
      () => {
        return getFacilityUsers(null, onFinalError);
      },
      () => {
        return getFacilityDetainees(onFinalSuccess, onFinalError);
      },
    ]
  };
}
