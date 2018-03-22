import app from './app';
import detainees from './detainees';
import facilities from './facilities';
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
  facilities,
  rehydrated,
};
