import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCkG722ZkTAGOLA6AdFHbWyrIfwYmpNL5M",
    authDomain: "data-add3a.firebaseapp.com",
    projectId: "data-add3a",
    storageBucket: "data-add3a.appspot.com",
    messagingSenderId: "846392095768",
    appId: "1:846392095768:web:730d19bc3864f7dbcd3f6d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);