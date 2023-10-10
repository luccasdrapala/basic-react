import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>Sobre</Link>
        <Link to='/Products/:id'>Products</Link>
    </nav>
  );
}

export default Navbar