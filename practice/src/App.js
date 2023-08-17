import './App.css';
import Cars from './components/Cars';
import UserDetails from './components/UserDetails';

const carsModel = [
  {id: 0, marca:"Ford", cor:"Preto", modelo:"Fiesta"},
  {id: 1, marca:"GM", cor:"Branco", modelo:"Onix"},
  {id: 2, marca:"Fiat", cor:"Vermelho", modelo:"Uno"}
]

function App() {
  return (
    <div className="App">

		<h3 className={"my_title"}>The Cars</h3>

		<div>
      {carsModel.map((car) => (
        <Cars key={car.id} car={car}/>
      ))}
    </div>
		
    </div>
  );
}

export default App;
