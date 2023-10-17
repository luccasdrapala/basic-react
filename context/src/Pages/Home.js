import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'

const Home = () => {
	const { counter } = useContext(CounterContext);

	return (
		<div>
			<h1>Home</h1>
			<ChangeCounter />
			<p>Valor do contador: {counter}</p>
		</div>
	)
}

export default Home