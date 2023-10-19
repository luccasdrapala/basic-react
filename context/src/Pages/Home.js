import ChangeCounter from '../components/ChangeCounter'

//refatorando como hook
import { useCounterContext } from '../hooks/useCounterContext';

const Home = () => {
	// const { counter } = useContext(CounterContext);
	const { counter } = useCounterContext();

	return (
		<div>
			<h1>Home</h1>
			<ChangeCounter />
			<p>Valor do contador: {counter}</p>
		</div>
	)
}

export default Home