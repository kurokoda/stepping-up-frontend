import admins from './admins';
import app from './app';
import counselors from './counselors';
import detainees from './detainees';
import facilities from './facilities';
import user from './user';
import users from './users';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  admins,
  app,
  counselors,
  detainees,
  facilities,
  user,
  users,
  rehydrated,
};
