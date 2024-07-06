import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import UserContext from '../context/stateContext';
import Swal from 'sweetalert2/dist/sweetalert2.js'

const Logout = () => {
  const navigate = useNavigate();
  const { setloginStudentData } = useContext(UserContext)
  const storedLoginData = localStorage.getItem('loginData');
  const parsedLoginData = storedLoginData ? JSON.parse(storedLoginData) : null;

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setloginStudentData(null);
    Swal.fire({
      text: `Logout Successfully`,
      icon: "success"
    });
    setTimeout(() => {
      navigate('/');
    }, 1000);
  }
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
              <i className="bi bi-person-fill"></i> {parsedLoginData ? parsedLoginData[0]?.role : 'Guest'}
            </Link>
          </li>
          <li>
            <Link to="/help" className="dropdown-item" >
              <i className="bi bi-question"></i> Help
            </Link>
          </li>

          <li >
            <Link className="dropdown-item" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right"></i> Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Logout