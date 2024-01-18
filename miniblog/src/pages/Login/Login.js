import styles from './Login.module.css';
import { UserAuthentication } from '../../hooks/userAuthentication';
import {useState, useEffect} from 'react';

const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const { createUser, error: authError, loading } = UserAuthentication();

	const handleSubmit = async (e) => {
		e.preventDefault();

		setError('');

		const user = {
			email,
			password
		}

		const res = await createUser(user);

		console.log(res);
	}

	useEffect(() => {

		if (authError) {
			setError(authError);
		}
	}, [authError]);

	return (
		<div className={styles.login}>
			<h1>Entrar</h1>
			<p>Faca login para utilizar o sistema</p>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Email: </span>
					<input 
						type="email"
						name="email"
						placeholder="Digite seu email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					<span>Senha: </span>
					<input 
						type="password"
						name="password"
						placeholder="Insira sua senha..."
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				{!loading && <button type="submit" className='btn'>Login</button>}
				{loading && <button type="submit" disabled className='btn'>Aguarde...</button>}
				{error && <p className={styles.error}>{error}</p>}
			</form>
		</div>
	);
}

export default Login;