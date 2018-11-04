import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyA7LH_5VxEd477lNc2ReiMnnjTDWGqf_qo",
    authDomain: "credit-manager-dd2e6.firebaseapp.com",
    databaseURL: "https://credit-manager-dd2e6.firebaseio.com",
    projectId: "credit-manager-dd2e6",
    storageBucket: "",
    messagingSenderId: "687297724044"
};

export default firebase.initializeApp(config);