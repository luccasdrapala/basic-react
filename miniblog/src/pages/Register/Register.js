import styles from './Register.module.css';

import {useState, useEffect} from 'react';

const Register = () => {
	return (
		<div>
			<h1>Cadastre-se para postar</h1>
			<p>Crie seu usuario e compartilhe suas historias</p>
			<form action="" method="post">
				<label>
					<span>Nome: </span>
					<input 
						type="text"
						name="displayName"
						placeholder="Digite seu nome"
						required
					/>
				</label>
				<label>
					<span>Email: </span>
					<input 
						type="email"
						name="email"
						placeholder="Digite seu email"
						required
					/>
				</label>
				<label>
					<span>Senha: </span>
					<input 
						type="password"
						name="password"
						placeholder="Insira sua senha..."
						required
					/>
				</label>
				<label>
					<span>Confirmacao de senha: </span>
					<input 
						type="password"
						name="confirmPassword"
						placeholder="Confirme a senha..."
						required
					/>
				</label>
				<button type="submit" className='btn'>Cadastrar</button>
			</form>
		</div>
	);
}

export default Register;