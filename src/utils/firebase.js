
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBC_HdrGjln8pzCO6EMqCdjiaaE7ZVTCvg",
  authDomain: "netflixxapp-7d4d1.firebaseapp.com",
  projectId: "netflixxapp-7d4d1",
  storageBucket: "netflixxapp-7d4d1.appspot.com",
  messagingSenderId: "618563492601",
  appId: "1:618563492601:web:6acac9c87b061d31e9e028",
  measurementId: "G-QCXSTYG1LF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();