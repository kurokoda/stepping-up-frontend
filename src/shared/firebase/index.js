import firebase from 'firebase';

const config = {
  apiKey           : 'AIzaSyCyiLK5m9dKDUsWfbHwJV6Wlr_3lwikKbg',
  authDomain       : 'ian-react-native-demo.firebaseapp.com',
  databaseURL      : 'https://ian-react-native-demo.firebaseio.com',
  storageBucket    : 'ian-react-native-demo.appspot.com',
  messagingSenderId: '614031872271'
};

export default firebase.initializeApp(config);