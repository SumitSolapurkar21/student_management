import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Logout = () => {
  return (
    <>

      <div className="dropdown">
        <button className='btn btn-primary btn-sm btn-profile ' data-bs-toggle="dropdown" >
          <i className="bi bi-person-fill"></i>
        </button>
        {/* <a className="btn btn-secondary btn-sm dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown link
        </a> */}

        <ul className="dropdown-menu dropdown-menu-lg-end">
          <li>
            <Link to="/profile" className="dropdown-item" >
              <i className="bi  bi-person-fill"></i> Superadmin
            </Link>
          </li>
          <li>
            <Link to="/help" className="dropdown-item" >
              <i className="bi bi-question"></i> Help
            </Link>
          </li>

          <li>
            <Link to="/" className="dropdown-item" >
              <i className="bi bi-box-arrow-right"></i> Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Logout