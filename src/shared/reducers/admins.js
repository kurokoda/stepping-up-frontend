import Immutable from 'immutable';
import * as FacilityActionTypes from '../actions/facility';

const defaultState = [];

export default function (state = defaultState, action) {
  switch (action.type) {
    case FacilityActionTypes.FACILITY_ADMINS_RECEIVED:
      return Immutable.fromJS(action.response);
    default:
      return state;
  }
}