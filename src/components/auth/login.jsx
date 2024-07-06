import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./auth.css"
import UserContext from '../context/stateContext';
import axios from 'axios';
import { login } from '../../api';
import Swal from 'sweetalert2/dist/sweetalert2.js'

const Login = () => {

     const navigate = useNavigate();
     const { setShowRegisterForm, setShowLoginForm, setloginStudentData } = useContext(UserContext)

     const formHandler = () => {
          setShowRegisterForm(true);
          setShowLoginForm(false);
     }
     const validate = (values) => {
          const errors = {};

          if (!values.username) {
               errors.username = "Username is Required";
          }

          if (!values.password) {
               errors.password = "Password is Required";
          }

          return errors;
     };

     const formik = useFormik({
          initialValues: {
               username: "",
               password: "",
          },
          validate,
          onSubmit: async (values, { resetForm }) => {
               try {
                    const response = await axios.post(`${login}`, values);
                    const { status, message, data } = response.data;
                    if (status === true) {
                          localStorage.setItem('loginData', JSON.stringify(data));
                          const storedLoginData = localStorage.getItem('loginData');
                          const parsedLoginData = JSON.parse(storedLoginData);
                         setloginStudentData(parsedLoginData);
                         Swal.fire({
                              text: `${message}`,
                              icon: "success"
                         });
                         resetForm();
                         setTimeout(() => {
                              if (data[0].role === "superadmin") navigate('/superadmindashboard')
                              else navigate('/studentdashboard')
                         }, 1000);
                    }else{
                         Swal.fire({
                              title:`${message}`,
                              text: `Do not have Access to Login`,
                              icon: "error"
                         });
                    }
               } catch (error) {
                    Swal.fire({
                         text: `${error}`,
                         icon: "error"
                    });
               }

          },
     });

     return (
          <>

               <div className='section'>
                    <h4 htmlFor='heading' className='mb-3 fw-bold'>Login</h4>
                    <form noValidate onSubmit={formik.handleSubmit}>
                         <div className="form-floating mb-3">
                              <input
                                   type="text"
                                   className="form-control"
                                   id="floatingInput"
                                   placeholder="username"
                                   name="username"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.username}
                              />
                              <label htmlFor="floatingInput">Username</label>
                              {formik.touched.username && formik.errors.username ? (
                                   <div className="text-danger">{formik.errors.username}</div>
                              ) : null}
                         </div>
                         <div className="form-floating mb-3">
                              <input
                                   type="password"
                                   className="form-control"
                                   id="floatingPassword"
                                   placeholder="Password"
                                   name="password"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.password}
                              />
                              <label htmlFor="floatingPassword">Password</label>
                              {formik.touched.password && formik.errors.password ? (
                                   <div className="text-danger">{formik.errors.password}</div>
                              ) : null}
                         </div>
                         <div className='form-frogetdiv d-flex justify-content-between'>
                              <div className="mb-3">
                                   <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                   <label className="form-check-label mx-2" htmlFor="exampleCheck1">Remember Me</label>
                              </div>
                              <div className="mb-3">
                                   <Link to='/forgot-password' className='forgettext'>Forget Password</Link>
                              </div>
                         </div>
                         <div className="group-button text-center mt-5">
                              <button type="submit" className="btn btn-primary btn-sm">Login</button>
                              <button type='button' className="btn btn-secondary btn-sm mx-2" onClick={formHandler}>Register</button>
                         </div>
                    </form>

               </div>
          </>

     );
};

export default Login;
