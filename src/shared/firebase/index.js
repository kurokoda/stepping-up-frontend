import * as FirebaseModule from 'firebase';
import config from '../config';

const {
        apiKey,
        authDomain,
        databaseURL,
        storageBucket,
        messagingSenderId,
      } = config.FIREBASE_CONFIG;

let firebaseInitialized = false;

if (
  apiKey !== 'null' &&
  authDomain !== 'null' &&
  databaseURL !== 'null' &&
  storageBucket !== 'null' &&
  messagingSenderId !== 'null'
) {
  FirebaseModule.initializeApp({
    apiKey,
    authDomain,
    databaseURL,
    storageBucket,
    messagingSenderId,
  });

  firebaseInitialized = true;
}

export const FirebaseRef = firebaseInitialized ? FirebaseModule.database().ref() : null;
export const Firebase    = firebaseInitialized ? FirebaseModule : null;
