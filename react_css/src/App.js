import logo from './logo.svg';
import './App.css';
import MyComponents from './components/MyComponents';
import Title from './components/Title';

function App() {

  const n = 15;
  const redTitle = false;
  
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

      {/* Classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo tem classe dinamica</h2>

      {/* css modules */}
       <Title/>

    </div>
  );
}

export default App;
