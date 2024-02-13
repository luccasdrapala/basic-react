import styles from "./Home.module.css";

// hooks
import {useNavigate, Link} from "react-router-dom";
import {useState} from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Home = () => {
	const [query, setQuery] = useState("");
	const {documents, loading} = useFetchDocuments("posts");
	debugger;
	const handleSubmit = (e) => {
		e.preventDefault();
	}

	return (
		<div className={styles.home}>
			<h1>Veja os postos mais recentes</h1>
			<form onSubmit={handleSubmit} className={styles.searchForm}>
				<input 
					type="text"
					placeholder="Procurar posts"
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className="btn btn-dark">Pesquisar</button>
			</form>
			<div>
				{loading && <p>Carregando...</p>}

				{documents && documents.map((post) => {
					return <h3>{post.title}</h3>
				})}

				{documents && documents.length === 0 && (
					<div className={styles.noPosts}>
						<p>Nao foram encontrados posts</p>

						<Link to={"/posts/create"} className="btn">
							Criar posts
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}

export default Home