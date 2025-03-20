

import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <nav className="logo-and-items-container">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO35-Tmeklt-PpUlI53hvoVx1xeOVIjx8MGQ&s"
          className="logo"
          alt="Demo"
        />
        {/* <h1 className="logo-heading">Demo</h1> */}
      </div>

      <ul className="nav-items-container link">
        <li>
          <Link to="/" className="components-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="components-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="components-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header