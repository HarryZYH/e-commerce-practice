import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDQ_3_oxKt7_CjrYSlrAYirrzxG1vyspag",
    authDomain: "e-commerce-practice-5a8cf.firebaseapp.com",
    projectId: "e-commerce-practice-5a8cf",
    storageBucket: "e-commerce-practice-5a8cf.appspot.com",
    messagingSenderId: "285993690939",
    appId: "1:285993690939:web:d3b4d16783af3d5198b91e",
    measurementId: "G-GKZ6WZYCTY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();
const auth = getAuth(app)


export { auth }