// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCtA83aaOF5JmFmh4hnOlGDz6RCb7um2ss",
	authDomain: "observationform-e6977.firebaseapp.com",
	projectId: "observationform-e6977",
	storageBucket: "observationform-e6977.firebasestorage.app",
	messagingSenderId: "503331538454",
	appId: "1:503331538454:web:61c5bfabb7487ae37f9737",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
if (firebase.storage) { // Check if storage SDK is loaded
  const storage = firebase.storage();
}
