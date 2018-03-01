const config = {
  API_BASE_URL   : process.env.API_BASE_URL || 'http://localhost:3000/',
  SHOW_DEV_TOOLS : process.env.SHOW_DEV_TOOLS || true,
  FIREBASE_CONFIG: {
    apiKey           : 'AIzaSyCyiLK5m9dKDUsWfbHwJV6Wlr_3lwikKbg',
    authDomain       : 'ian-react-native-demo.firebaseapp.com',
    databaseURL      : 'https://ian-react-native-demo.firebaseio.com',
    storageBucket    : 'ian-react-native-demo.appspot.com',
    messagingSenderId: '614031872271'
  }
}

export default config;