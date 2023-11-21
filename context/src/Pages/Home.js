import ChangeCounter from '../components/ChangeCounter'

//refatorando como hook
import { useCounterContext } from '../hooks/useCounterContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
	
	const { counter } = useCounterContext();
	const { color, dispatch } = useTitleColorContext();

	const setTitleColor = (color) => {
		dispatch({type: color});
	}

	return (
		<div>
			<h1 style={{color: color}}>Home</h1>
			<ChangeCounter />
			<div>
				<button onClick={() => setTitleColor("RED")}>
					Vermelho
				</button>
				<button onClick={() => setTitleColor("BLUE")}>
					Azul
				</button>
			</div>
			<p>Valor do contador: {counter}</p>
		</div>
	)
}

export default Home