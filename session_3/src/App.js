import logo from './logo.svg';
import './App.css';

import ImgVariavel from './assets/IMG_3612.JPG'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Looping from './components/Looping';

function App() {

  const lastName = "Drapala"

  return (
    <div className="App">
      <ManageData/>
      <ListRender/>
      <br />
      <ConditionalRender/>
      <br />
      <ShowUserName name={lastName}/>
      <CarDetails brand="ford" km={100.000} color="preto" newCar={true}/>
      <CarDetails brand="VW" km={150.000} color="vermelho" newCar={true}/>
      <CarDetails brand="fiat" km={300.000} color="branco" newCar={false}/>
      <hr />
      <Looping/>
    </div>
  );
}

export default App;
