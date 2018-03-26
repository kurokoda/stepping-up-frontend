import Immutable from 'immutable';
import * as ActionTypes from '../actions/user';

const defaultState = null;

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.USER_LOGIN_SUCCESS:
      return Immutable.fromJS(action.response);
    case ActionTypes.USER_LOGOUT:
      return null;
    default:
      return state;
  }
}
