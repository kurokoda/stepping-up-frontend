import firebase from 'firebase';
import config from '../config';

export default firebase.initializeApp(config.FIREBASE_CONFIG);