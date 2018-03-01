import Immutable from 'immutable';
import * as ActionType from '../actions/app';

const defaultState = Immutable.fromJS({
  modal : null,
  errors: {},
});

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionType.MODAL_SHOW:
      return state.merge({modal: action.payload});
    case ActionType.MODAL_HIDE:
      return state.merge({modal: null});
    default:
      return state;
  }
}
