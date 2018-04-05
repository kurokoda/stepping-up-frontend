import admins from './admins';
import adminsTotal from './adminsTotal';
import app from './app';
import counselors from './counselors';
import counselorsTotal from './counselorsTotal';
import detainees from './detainees';
import detaineesTotal from './detaineesTotal';
import facilities from './facilities';
import user from './user';
import users from './users';
import usersTotal from './usersTotal';

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
  adminsTotal,
  app,
  counselors,
  counselorsTotal,
  detainees,
  detaineesTotal,
  facilities,
  user,
  users,
  usersTotal,
  rehydrated,
};
