import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'


const Products = () => {
	const { counter } = useContext(CounterContext);

	return (
		<div>
			<h1>Products</h1>
			<ChangeCounter />
			<p>Valor do contador: {counter}</p>
		</div>
	)
}

export default Products