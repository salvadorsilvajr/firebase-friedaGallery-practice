// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBE6T71XsthgBhxAjfL_-4G8bf2WtF1CX8",
    authDomain: "friedagallery-practice.firebaseapp.com",
    databaseURL: "https://friedagallery-practice-default-rtdb.firebaseio.com",
    projectId: "friedagallery-practice",
    storageBucket: "friedagallery-practice.appspot.com",
    messagingSenderId: "652244912379",
    appId: "1:652244912379:web:f17828ea9466c10602885e",
    measurementId: "G-4185D47XL9",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const auth = getAuth(app);

const db = getFirestore(app);

const messaging = getMessaging(app);
// const { REACT_APP_VAPID_KEY } = process.env;
// const publicKey = REACT_APP_VAPID_KEY;

// export const getToken = async (setTokenFound) => {
//     let currentToken = "";

//     try {
//       currentToken = await messaging.getToken({ vapidKey: publicKey });
//       if (currentToken) {
//         setTokenFound(true);
//       } else {
//         setTokenFound(false);
//       }
//     } catch (error) {
//       console.log("An error occurred while retrieving token. ", error);
//     }

//     return currentToken;
//   };
// const messaging = getMessaging();
// getToken(messaging, {
//     vapidKey:
//         "BABG8iQFlAdNYh6jeVsb06dvO_5lgZlA3RN_BjDfzs8eLulgZG-ZI256QYBWf18p9U0XVi2qptLlFp3B9G7NAKo",
// })
//     .then((currentToken) => {
//         if (currentToken) {
//             console.log(currentToken);
//             // Send the token to your server and update the UI if necessary
//             // ...
//         } else {
//             // Show permission request UI
//             console.log(
//                 "No registration token available. Request permission to generate one."
//             );
//             // ...
//         }
//     })
//     .catch((err) => {
//         console.log("An error occurred while retrieving token. ", err);
//         // ...
//     });

export { db, storage, auth, messaging };
