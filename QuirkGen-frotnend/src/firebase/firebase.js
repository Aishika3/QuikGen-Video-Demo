import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCXcBebVk3VMOM-sH2y5zib5wW3kYPvqOE",
  authDomain: "whatsappbot-d206d.firebaseapp.com",
  databaseURL: "https://whatsappbot-d206d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "whatsappbot-d206d",
  storageBucket: "whatsappbot-d206d.appspot.com",
  messagingSenderId: "962167523453",
  appId: "1:962167523453:web:0cb13e92c657b0b2fd8914",
  measurementId: "G-16V22F5KNP"
};

const app = initializeApp(firebaseConfig);
// console.log(app);

const auth = getAuth(app)
const db = getFirestore(app)
export {db,app,auth};