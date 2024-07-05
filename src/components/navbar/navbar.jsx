import React, { useContext } from 'react'
import smslogo from '../../../public/images/smslogo.png'
import { Link } from 'react-router-dom'
import Logout from './logout'
import './navbar.css'
import UserContext from '../context/stateContext'

const Navbar = () => {

     const storedLoginData = localStorage.getItem('loginData');
     const parsedLoginData = JSON.parse(storedLoginData);

     return (
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
               <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                         <img src={smslogo} alt='SMS LOGO' width={50} />
                    </a>
                    <a className="navbar-brand" href="#">Student Management System</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                              {parsedLoginData[0]?.role === 'superadmin' &&
                                   <li className="nav-item">
                                        <Link to='/superadmindashboard' className="nav-link active">
                                             Dashboard
                                        </Link>
                                   </li>
                              }
                              {parsedLoginData[0]?.role === 'Student' &&
                                   <li className="nav-item">
                                        <Link to='/studentdashboard' className="nav-link active">
                                             Dashboard
                                        </Link>
                                   </li>
                              }

                              <li className="nav-item dropdown">
                                   <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Academics
                                   </a>
                                   <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Courses</a></li>
                                        <li><a className="dropdown-item" href="#">Fees</a></li>
                                        <li><a className="dropdown-item" href="#">Examination</a></li>
                                        <li><a className="dropdown-item" href="#">Attendence</a></li>
                                        <li><a className="dropdown-item" href="#">Staff</a></li>
                                   </ul>
                              </li>

                         </ul>
                         <form className="d-flex" role="search">
                              <Logout />
                         </form>
                    </div>
               </div>
          </nav>
     )
}

export default Navbar