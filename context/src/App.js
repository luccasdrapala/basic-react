import './App.css';

// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Navbar from './components/Navbar';

//Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';

function App() {
	return (
		<div className="App">
			<h1>Context</h1>

			<BrowserRouter>
				<Navbar/>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/products' element={<Products />} />
					</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
