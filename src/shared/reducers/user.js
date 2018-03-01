import Immutable from 'immutable';
import * as ActionType from '../actions/user';

const defaultState = null;

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionType.LOG_IN:
      return Immutable.fromJS(action.payload);
    case ActionType.LOG_OUT:
      return null;
    default:
      return state;
  }
}
