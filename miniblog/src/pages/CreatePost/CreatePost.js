import React from 'react'
import styles from './CreatePost.module.css';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {

	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [bady, setBody] = useState("");
	const [tags, setTags] = useState([]);
	const [formError, setFormError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<h2>Create Post</h2>
			<p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>
			<form submit={handleSubmit}>
				<label>
					<span>Titulo:</span>
					<input 
						type="text"
						name='title'
						required
						placeholder='Pense em um bom titulo'
						onChance={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</label>
				<label>
					<span>URL da imagem:</span>
					<input 
						type="text"
						name='image'
						required
						placeholder='Insira uma imagem'
						onChance={(e) => setTitle(e.target.value)}
						value={image}
					/>
				</label>
				<label>
					<span>Conteudo:</span>
					<textarea 
						name="body"
						required
						placeholder='Insira o conteudo do post'
						onChange={(e) => e.target.value}
					></textarea>
				</label>
				<label>
					<span>Tags:</span>
					<input 
						type="text"
						name='tags'
						required
						placeholder='Insira as tags separadas por virgula'
						onChance={(e) => setTags(e.target.value)}
						value={tags}
					/>
				</label>
				<button type="submit" className='btn'>Cadastrar</button>
				{/* {!loading && <button type="submit" className='btn'>Cadastrar</button>}
				{loading && <button type="submit" disabled className='btn'>Aguarde...</button>}
				{error && <p className={styles.error}>{error}</p>} */}
			</form>
		</div>
	);
}

export default CreatePost;