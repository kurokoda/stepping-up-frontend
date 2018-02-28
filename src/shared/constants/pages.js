export const PAGES = {
  HOME : {
    key  : 'HOME',
    label: 'home',
    route: '/',
  },
  ABOUT: {
    key  : 'ABOUT',
    label: 'about',
    route: '/about',
  },
};

PAGES.ALL = [
  PAGES.HOME,
  PAGES.ABOUT,
];

export const AUTH = {
  LOGIN         : {
    key  : 'LOGIN',
    label: 'login',
    route: '/login',
  },
  LOGOUT        : {
    key  : 'LOGOUT',
    label: 'logout',
    route: '/logout',
  },
  RESET_PASSWORD: {
    key  : 'RESET_PASSWORD',
    label: 'reset password',
    route: '/reset-password',
  },
  SIGNUP        : {
    key  : 'SIGNUP',
    label: 'sign up',
    route: '/signup',
  },
};

AUTH.ALL = [
  AUTH.LOGIN,
  AUTH.LOGOUT,
  AUTH.RESET_PASSWORD,
  AUTH.SIGNUP,
];
