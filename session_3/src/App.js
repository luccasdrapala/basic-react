import logo from './logo.svg';
import './App.css';

import ImgVariavel from './assets/IMG_3612.JPG'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

function App() {
  return (
    <div className="App">
      <ManageData/>
      <ListRender/>
      <br />
      <ConditionalRender/>
    </div>
  );
}

export default App;
