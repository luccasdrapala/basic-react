import './App.css';
import { useState, useEffect } from "react";

function App() {

	const [products, setProducts] = useState([]);
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const url = 'http://localhost:3000/products';

	//chamada assincrona
	useEffect(() => {
		async function fetchData() {
			const res = await fetch(url);
			const data = await res.json();

		setProducts(data)
		}
		
		fetchData()
	}, []);

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

		console.log(res);
	};

	return (
    	<div className="App">
      		<h1>Lista de produtos</h1>
			<ul>
				{products.map((product) => (
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
