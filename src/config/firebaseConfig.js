import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

var config = {
	apiKey: "AIzaSyCpD7fTV5BkmQ7bBEJbzQFvq86Wroe-kJY",
	authDomain: "restaurant-gene.firebaseapp.com",
	databaseURL: "https://restaurant-gene.firebaseio.com",
	projectId: "restaurant-gene",
	storageBucket: "restaurant-gene.appspot.com",
	messagingSenderId: "134885247151"
};
firebase.initializeApp(config);

export default firebase;