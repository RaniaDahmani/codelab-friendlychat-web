/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
    apiKey: "AIzaSyDFesVDwwTfxNqgswNq6nYdVxn4azDchfk",
    authDomain: "friendlychat-dahmani.firebaseapp.com",
    projectId: "friendlychat-dahmani",
    storageBucket: "friendlychat-dahmani.appspot.com",
    messagingSenderId: "536978735713",
    appId: "1:536978735713:web:614881b9a83bcf8552a020"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}