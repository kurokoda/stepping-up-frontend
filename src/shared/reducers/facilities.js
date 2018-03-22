import Immutable from 'immutable';
import * as ActionTypes from '../actions/facilities';

const defaultState = null;

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.FACILITY_CREATED:
      return state;
    case ActionTypes.FACILITIES_RECEIVED:
      return Immutable.fromJS(action.response);
    case ActionTypes.FACILITY_RECEIVED:
      return Immutable.fromJS([action.response]);
    case ActionTypes.FACILITY_UPDATED:
      return state;
    case ActionTypes.FACILITY_DELETED:
      return state;
    case ActionTypes.FLUSH:
      return null;
    default:
      return state;
  }
}
