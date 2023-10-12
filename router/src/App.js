import './App.css';

// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';

// componentes
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Router</h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/products/:id/info' element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;