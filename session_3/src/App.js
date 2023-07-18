import logo from './logo.svg';
import './App.css';

import ImgVariavel from './assets/IMG_3612.JPG'

function App() {
  return (
    <div className="App">
      <h1>Teste</h1>

      <div>
        <img src="/IMG_3684.JPG" alt="Lula Wins" />
      </div>

      <div>
        <img src={ImgVariavel} alt="imagem 2" />
      </div>
    </div>
  );
}

export default App;
