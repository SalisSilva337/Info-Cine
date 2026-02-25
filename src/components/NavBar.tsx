import { Link } from 'react-router-dom'
import "../css/NavBar.css"

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Info-Cine</h1>
      <nav className="nav-links">
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/favorites" className='nav-link'>Favorites</Link>
      </nav>
    </nav>
  )
}

export default NavBar