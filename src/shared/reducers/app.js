import Immutable from 'immutable';
import * as AppActionType from '../actions/app';
import * as UserActionType from '../actions/user';

const defaultState = Immutable.fromJS({
  errors: {},
});

export default function (state = defaultState, action) {
  switch (action.type) {
    case AppActionType.MODAL_SHOW:
      return state.merge({modal: action.payload});
    case AppActionType.MODAL_HIDE:
      return state.merge({modal: null});
    case AppActionType.ALERT_SHOW:
      return state.merge({alert: action.payload});
    case AppActionType.ALERT_HIDE:
      return state.merge({alert: null});
    case UserActionType.USER_SIGNUP_ERROR:
      if (action.error.response.body.code === 11000) {
        return state.merge({alert: {strong: 'Signup Failed:', msg: 'a user with that name already exists', level: 'warning'}});
      }
      return state.merge({alert: null});
    case UserActionType.USER_LOGIN_ERROR:
      if (action.error.response.body.status === 401) {
        return state.merge({alert: {strong: 'Login Failed:', msg: 'the name or password provided does not exist', level: 'warning'}});
      }
      return state.merge({alert: null});
    default:
      return state;
  }
}
