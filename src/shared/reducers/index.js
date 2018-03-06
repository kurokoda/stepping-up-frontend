import app from './app';
import detainees from './detainees';
import user from './user';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  app,
  user,
  detainees,
  rehydrated,
};
