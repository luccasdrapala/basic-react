import './App.css';
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

const url = 'http://localhost:3000/products';

function App() {

	const [products, setProducts] = useState([]);
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');

	//custom hook
	const { data:items } = useFetch(url);

	// add products
	const handleSubmit = async (e) => {
		e.preventDefault();

		const product = {
			name,
			price
		};

		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(product),
		});

		//reload dinamico
		const addedProduct = await res.json();
		setProducts((preveousProducts) => [...preveousProducts, addedProduct]);

		//limpar campos
		setPrice('');
		setName('');
	};

	return (
    	<div className="App">
      		<h1>Lista de produtos</h1>
			<ul>
				{items && items.map((product) => (
					<li key={product.id}>{product.name} - {product.price}</li>
				))}
			</ul>
			
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
					<input className="form-button" type="submit" value="Criar"/>
				</form>
			</div>
			
    	</div>
  	);
}

export default App;
