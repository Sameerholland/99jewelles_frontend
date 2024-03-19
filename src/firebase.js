import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
   apiKey: "<YOUR FIREBASE APIKEY>",
   authDomain: "<YOUR FIREBASE AUTHDOMAIN>",
   projectId: "<YOUR FIREBASE PROJRCTID>",
   storageBucket: "<YOUR FIREBASE STROGEBUCKET>",
   messagingSenderId: "<YOUR FIREBASE MESSAGINGSENDER ID>",
   appId: "<YOUR FIREBASE APP ID>"
 };

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export default app;
