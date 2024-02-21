import React from 'react'

import {useFetchDocuments} from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';
import PostDetail from '../../components/PostDetail';
import { Link } from 'react-router-dom';
import styles from './Search.module.css';


const Search = () => {
	const query = useQuery();
	const search = query.get("q");

	const {documents} = useFetchDocuments('posts', search);
	debugger;

	return (
		<div className={styles.search_container}>
			<h2>Search</h2>
			<h1>Resultados encontrados para: {search}</h1>
			<div>
				{documents && documents.length === 0 && (
					<>
						<p>Nao foram encontrados posts a partir da sua busca...</p>
						<Link to="/" className="btn btn-dark">
							Voltar
						</Link>
					</>
				)}
				{documents && documents.map((post) => (
					<PostDetail key={documents.id} post={post}/>
				))}
			</div>
		</div>
	)
}

export default Search;