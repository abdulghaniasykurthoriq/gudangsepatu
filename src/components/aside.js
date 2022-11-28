import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Aside({isActive}) {
  const history = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    history('/')
    // Navigate('/')
  }
  
  return (
    <>
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "280px", height: "100vh", zIndex:1}}>
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none w-100 justify-content-center">
             
              <span className="fs-4 text-center">Gudang Sepatu</span>
            </Link>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <Link to="/dashboard" className={`${isActive === 1 ? 'active' : '' } nav-link `} aria-current="page">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/add" className={`${isActive === 2 ? 'active' : '' } nav-link `}>
                  Add
                </Link>
              </li>
              <li>
                <Link to="/history" className={`${isActive === 4 ? 'active' : '' } nav-link `}>
                  History
                </Link>
              </li>
            </ul>
            <hr/>
            <div className="dropdown">
              <Link to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                <strong>Admin</strong>
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                
                <li onClick={handleLogout}><p className="dropdown-item" to="/">Sign out</p></li>
              </ul>
            </div>
    </div>
    
    </>
  )
}

export default Aside