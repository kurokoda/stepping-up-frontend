import Immutable from 'immutable';
import * as ActionTypes from '../actions/detainees';

const defaultState = null;

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.DETAINEES_RECEIVED:
      return Immutable.fromJS(action.response);
    case ActionTypes.FLUSH:
      return null;
    default:
      return state;
  }
}
