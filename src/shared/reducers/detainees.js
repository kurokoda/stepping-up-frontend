import Immutable from 'immutable';
import * as ActionTypes from '../actions/detainees';

const defaultState = null;

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.DETAINEE_CREATED:
      return state;
    case ActionTypes.DETAINEES_RECEIVED:
      return Immutable.fromJS(action.response);
    case ActionTypes.DETAINEE_RECEIVED:
      return Immutable.fromJS([action.response]);
    case ActionTypes.DETAINEE_UPDATED:
      return state;
    case ActionTypes.DETAINEE_DELETED:
      return state;
    case ActionTypes.FLUSH:
      return null;
    default:
      return state;
  }
}
