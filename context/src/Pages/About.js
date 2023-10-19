import ChangeCounter from '../components/ChangeCounter'

//refatorando como hook
import { useCounterContext } from '../hooks/useCounterContext';

const About = () => {
	const { counter } = useCounterContext();

	return (
		<div>
			<h1>About</h1>
			<ChangeCounter />
			<p>Valor do contador: {counter}</p>
		</div>
	)
}

export default About