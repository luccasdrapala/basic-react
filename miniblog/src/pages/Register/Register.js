import { UserAuthentication } from '../../hooks/userAuthentication';
import styles from './Register.module.css';

import {useState, useEffect} from 'react';

const Register = () => {
	const [displayName, setDisplayName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	const { createUser, error: authError, loading } = UserAuthentication();

	const handleSubmit = async (e) => {
		e.preventDefault();

		setError('');

		const user = {
			displayName,
			email,
			password
		}

		if (password !== confirmPassword) {
			setError('As senhas precisam ser iguais');
			return;
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
		<div className={styles.register}>
			<h1>Cadastre-se para postar</h1>
			<p>Crie seu usuario e compartilhe suas historias</p>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Nome: </span>
					<input 
						type="text"
						name="displayName"
						placeholder="Digite seu nome"
						required
						value={displayName}
						onChange={(e) => setDisplayName(e.target.value)}
					/>
				</label>
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
				<label>
					<span>Confirmacao de senha: </span>
					<input 
						type="password"
						name="confirmPassword"
						placeholder="Confirme a senha..."
						required
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</label>
				{!loading && <button type="submit" className='btn'>Cadastrar</button>}
				{loading && <button type="submit" disabled className='btn'>Aguarde...</button>}
				{error && <p className={styles.error}>{error}</p>}
			</form>
		</div>
	);
}

export default Register;