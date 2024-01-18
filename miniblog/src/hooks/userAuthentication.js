import { db } from "../firebase/config";

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	signOut
} from 'firebase/auth';

import {useState, useEffect} from 'react';

export const UserAuthentication = () => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);

	// cleanup
	// deal with memory leak
	const [cancelled, setCancelled] = useState(false);
	const auth = getAuth();

	function checkIfIsCancelled() {
		if (cancelled) {
			return;
		}
	}

	//Register
	const createUser = async (data) => {
		checkIfIsCancelled();

		setLoading(true);
		setError(null);

		try {

			const {user} = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password
			)

			await updateProfile(user, {
				displayName: data.displayName
			});

			setLoading(false);

			return user
		} catch (error) {
			debugger;
			console.log(error.message);
			console.log(typeof error.message);

			let systemErrorMessage;

			if (error.message.includes("Password")) {
				systemErrorMessage = 'A senha precisa de pelo menos 6 caracteres.';
			} else if (error.message.includes("email-already")) {
				systemErrorMessage = "Email ja cadastrado.";
			} else {
				systemErrorMessage = "Ocorreu um erro, tente mais tarde";
			}
			
			setLoading(false);
			setError(systemErrorMessage);
		}
	}

	//Logout
	const logout = () => {
		checkIfIsCancelled();

		signOut(auth)
	}

	useEffect(() => {
		return () => setCancelled(true);
	}, []);

	return {
		auth,
		createUser,
		error,
		loading,
		logout
	}
};