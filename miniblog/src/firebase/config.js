import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAYp94i3ExIFBSMWzDIi0RQQUDD3GYHpWs",
	authDomain: "miniblog-react-30228.firebaseapp.com",
	projectId: "miniblog-react-30228",
	storageBucket: "miniblog-react-30228.appspot.com",
	messagingSenderId: "732041064440",
	appId: "1:732041064440:web:ef906f59c4d06d1857300d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };