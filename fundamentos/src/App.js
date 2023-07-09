//my components
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import TemplateExpressions from './components/TemplateExpressions';

//style
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Teste</h1>
      <FirstComponent/>
      <SecondComponent/>
      <TemplateExpressions/>
    </div>
  );
}

export default App;
