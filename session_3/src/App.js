// import logo from './logo.svg';
import './App.css';

// import ImgVariavel from './assets/IMG_3612.JPG'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Looping from './components/Looping';
import Fragment from './components/Fragment.js';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {

  const lastName = "Drapala"

  function showMessage() {
    console.log("Evento do componente pai !!!")
  }

  const [ message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  } 

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
      <hr />
      <Fragment/>
      <hr />
      <Container myValue="Tamo voltani">
        <p>Este eh o conteudo</p>
      </Container>
      <hr />
      <Container myValue="Tamo voltani 2">
        <p>Este eh o conteudo 2</p>
      </Container>
      <hr />

      {/* Executar funcao p/ prop*/}
      <ExecuteFunction fatherFunction={showMessage}/>
      <hr />

      {/* {state lift} */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

    </div>
  );
}

export default App;
