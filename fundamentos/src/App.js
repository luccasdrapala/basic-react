//my components
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';

//style
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Teste</h1>
      <FirstComponent />
      <SecondComponent />
      <TemplateExpressions />
      <Events />
    </div>
  );
}

export default App;
