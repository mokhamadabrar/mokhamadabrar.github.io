// Firebase is initialized automatically by /__/firebase/init.js

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
if (firebase.storage) { // Check if storage SDK is loaded
  const storage = firebase.storage();
}
