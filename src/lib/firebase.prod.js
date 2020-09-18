import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import{ seedDatabase } from '../seed';

const firebaseConfig = {
  apiKey: "AIzaSyAGDrXemneg5v71YlnH6XPQckB-c--W5oA",
  authDomain: "netflix-clone-659ee.firebaseapp.com",
  databaseURL: "https://netflix-clone-659ee.firebaseio.com",
  projectId: "netflix-clone-659ee",
  storageBucket: "netflix-clone-659ee.appspot.com",
  messagingSenderId: "148612554051",
  appId: "1:148612554051:web:87d8c54eceae9f31c3a3f6"
};

const firebase = Firebase.initializeApp(firebaseConfig);

seedDatabase(firebase);

export default firebase;
