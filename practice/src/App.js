import './App.css';
import UserDetails from './components/UserDetails';

function App() {

	const dados = [
		{id: 0, nome: "Luccas", idade: 24, profissao: "dev"},
		{id: 1, nome: "Kaue", idade: 24, profissao: "Analista"},
		{id: 2, nome: "Joao", idade: 23, profissao: "Backofficer"},
		{id: 3, nome: "Igor", idade: 17, profissao: "Advogado"},
		{id: 4, nome: "Mari", idade: 16, profissao: "Logistica"},
	]

  return (
    <div className="App">
		<UserDetails dados={dados} />
    </div>
  );
}

export default App;
