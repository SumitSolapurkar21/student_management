import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./auth.css"
import smsimage from "/images/sms_background_image.jpg"
import Login from './login';
import Register from './register';
import UserContext from '../context/stateContext';

const Layout = () => {
     const { showRegisterForm, showLoginForm } = useContext(UserContext)
     return (
          <div className="container">
               <div className="row form-layout align-items-center">
                    <div className='col-12 col-md-7'>
                         <img src={smsimage} className='img-fluid bg-image' alt="Background" />
                    </div>
                    <div className='col-12 col-md-5'>
                         {showLoginForm && <Login />}
                         {showRegisterForm && <Register />}
                    </div>
               </div>
          </div>
     );
};

export default Layout;
