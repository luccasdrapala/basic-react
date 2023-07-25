import logo from './logo.svg';
import './App.css';

import ImgVariavel from './assets/IMG_3612.JPG'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

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
      <CarDetails brand="ford" km={100.000} color="preto"/>
    </div>
  );
}

export default App;
