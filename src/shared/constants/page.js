const PAGES = {
  APPLICATION: {
    HOME     : {
      key  : 'HOME',
      label: 'home',
      route: '/',
    },
    DASHBOARD: {
      key  : 'DASHBOARD',
      label: 'dashboard',
      route: '/dashboard',
    },
    FACILITY : {
      key  : 'FACILITY',
      label: 'facility',
      route: '/facility',
    },
    SCREEN   : {
      key  : 'SCREEN',
      label: 'screen',
      route: '/screen',
    },
    DETAINEE : {
      key  : 'DETAINEE',
      label: 'detainee',
      route: '/detainee',
    },
  },
  USER       : {
    LOGIN         : {
      key  : 'LOGIN',
      label: 'login',
      route: '/login',
    },
    LOGOUT        : {
      key  : 'LOGOUT',
      label: 'logout',
      route: '/login',
    },
    RESET_PASSWORD: {
      key  : 'RESET_PASSWORD',
      label: 'reset password',
      route: '/reset-password',
    },
    SIGNUP_USER   : {
      key  : 'SIGNUP_USER',
      label: 'Register',
      route: '/signupUser/user',
    },
    SIGNUP_ADMIN  : {
      key  : 'SIGNUP_ADMIN',
      label: 'Administrator Registration',
      route: '/signupUser/admin',
    },
    PROFILE       : {
      key  : 'PROFILE',
      label: 'profile',
      route: '/profile',
    },
  },
};

export default PAGES;
