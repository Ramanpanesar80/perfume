// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Ensure this line exists
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB9kXk16kKZnR4Nh3834BjvZzn10N5MNYY",
    authDomain: "perfume-6c0da.firebaseapp.com",
    databaseURL: "https://perfume-6c0da-default-rtdb.firebaseio.com",
    projectId: "perfume-6c0da",
    storageBucket: "perfume-6c0da.firebasestorage.app",
    messagingSenderId: "200559628028",
    appId: "1:200559628028:web:c2d144a8df5ad1caae5179",
    measurementId: "G-HLSZJML1KE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };

