import logo from './logo.svg';
import './App.css';
import MyComponents from './components/MyComponents';

function App() {

  const n = 15;
  
  return (
    <div className="App">
      <h1>Opa</h1>

      {/* CSS em componente */}
      <MyComponents/>
      <p>Paragrafo do app JS (vaza o CSS do componet)</p>

      {/* INLINE CSS */}
      <p style={{color: "blue", padding: "30px", backgroundColor: "greenyellow"}}>
        CSS INLINE
      </p>

      {/* CSS INLINE DINAMICO */}
      <h2 style={n > 10 ? {backgroundColor: "green"} : {backgroundColor: "red"}}>CSS Dinamico</h2>

    </div>
  );
}

export default App;
