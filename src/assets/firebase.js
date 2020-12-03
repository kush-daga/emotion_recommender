import firebase from "firebase";
var firebaseConfig = {
	apiKey: "AIzaSyCs_nklIHWr68AF9gjnQOHtjoujlyC41Is",
	authDomain: "emotion-recommender.firebaseapp.com",
	projectId: "emotion-recommender",
	storageBucket: "emotion-recommender.appspot.com",
	messagingSenderId: "579242498505",
	appId: "1:579242498505:web:87a4cf4a732a9e0edd3018",
	measurementId: "G-G1DLT571M4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
