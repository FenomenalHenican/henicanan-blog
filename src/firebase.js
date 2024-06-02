import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHZ3OfIiDbIqd8dzeE54Sw-cA7JEHQIWo",
  authDomain: "utopian-cistern-406011.firebaseapp.com",
  projectId: "utopian-cistern-406011",
  storageBucket: "utopian-cistern-406011.appspot.com",
  messagingSenderId: "185791041506",
  appId: "1:185791041506:web:d7903b9cf721441f3633bb",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
