import './App.css';
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

const url = 'http://localhost:3000/products';

function App() {

	const [products, setProducts] = useState([]);
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');

	//custom hook
	const { data: items, httpConfig, loading, error } = useFetch(url);

	// add products
	const handleSubmit = async (e) => {
		e.preventDefault();

		const product = {
			name,
			price
		};

		httpConfig(product, "POST");

	//limpar campos
		setPrice('');
		setName('');	
	};

	const handleDelete = (id) => {
		httpConfig(id, "DELETE");
	}

	return (
    	<div className="App">
      		<h1>Lista de produtos</h1>
			{loading && <p>Carregando dados...</p>}
			{error && <p>Erro na requisicao - Error Message: {error}</p>}
			{!error && (
				<ul>
				{items && items.map((product) => (
					<li key={product.id}>{product.name} - {product.price} - <button onClick={() => handleDelete(product.id)}>Excluir</button></li>
				))}
			</ul>
			)}
			
			<div className='add-product'>
				<form onSubmit={handleSubmit}>
					<label>
						Nome:
						<input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
					</label>
					<br />
					<label>
						Preco:
						<input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
					</label><br />
					{!loading && <input className="form-button" type="submit" value="Criar"/>}
					{loading && <input className="form-button" type="submit" disabled value="Aguarde..."/>}
				</form>
			</div>
			
    	</div>
  	);
}

export default App;
