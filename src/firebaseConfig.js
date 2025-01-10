import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA02SWJTmoiYoySWR5hx_Wh-hjTWS1gnMk",
  authDomain: "medical-474f8.firebaseapp.com",
  projectId: "medical-474f8",
  storageBucket: "medical-474f8.firebasestorage.app",
  messagingSenderId: "516040118083",
  appId: "1:516040118083:web:50a565795dae76dbe569f6",
  measurementId: "G-9V22EVPVCE"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app)