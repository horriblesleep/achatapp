
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_mwLLukprTg7iiMYsW84kiXPDc_Ykh5U",
  authDomain: "achatapp-83e8e.firebaseapp.com",
  projectId: "achatapp-83e8e",
  storageBucket: "achatapp-83e8e.appspot.com",
  messagingSenderId: "509576813117",
  appId: "1:509576813117:web:16e30f6dfd86db8696e854"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)