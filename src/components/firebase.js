// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPY7PxxRPkfPV3n2tf_y9RIuqaEHT47HU",
  authDomain: "stylecart-748f2.firebaseapp.com",
  projectId: "stylecart-748f2",
  storageBucket: "stylecart-748f2.firebasestorage.app",
  messagingSenderId: "418557555544",
  appId: "1:418557555544:web:93fe4021569bfed850eb2d",
  measurementId: "G-QEDQWDYLQV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);