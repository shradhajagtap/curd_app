import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-info'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarNav'>

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/add">Add</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/show">Show</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default NavBar