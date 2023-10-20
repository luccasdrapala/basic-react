import ChangeCounter from '../components/ChangeCounter'

//refatorando como hook
import { useCounterContext } from '../hooks/useCounterContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
	
	const { counter } = useCounterContext();
	const { color } = useTitleColorContext();

	return (
		<div>
			<h1 style={{color: color}}>Home</h1>
			<ChangeCounter />
			<p>Valor do contador: {counter}</p>
		</div>
	)
}

export default Home