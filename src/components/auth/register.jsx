import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import "./auth.css";
import UserContext from '../context/stateContext';
import axios from 'axios';
import { registerstudent } from '../../api';
import Swal from 'sweetalert2/dist/sweetalert2.js'

const Register = () => {
     const { setShowRegisterForm, setShowLoginForm } = useContext(UserContext);

     const formHandler = () => {
          setShowRegisterForm(false);
          setShowLoginForm(true);
     }

     const validate = (values) => {
          const errors = {};

          if (!values.fullname) errors.fullname = "Full Name is Required";
          if (!values.gender) errors.gender = "Gender is Required";
          if (!values.dateofbirth) errors.dateofbirth = "Date Of Birth is Required";
          if (!values.age) errors.age = "Age is Required";
          if (!values.email) errors.email = "Email is Required";
          if (!values.mobilenumber) errors.mobilenumber = "Mobile Number is Required";
          if (!values.password) errors.password = "Password is Required";

          return errors;
     };

     const formik = useFormik({
          initialValues: {
               fullname: '',
               gender: '',
               dateofbirth: '',
               age: '',
               email: '',
               mobilenumber: '',
               password: '',
          },
          validate,
          onSubmit: async (values, { resetForm }) => {
               await axios.post(`${registerstudent}`, values)
                    .then((response) => {
                         const { status, message } = response.data;
                         if (status === true) {
                              Swal.fire({
                                   text: `${message}`,
                                   icon: "success"
                              });
                              resetForm();
                         } else {
                              Swal.fire({
                                   text: `${message}`,
                                   icon: "error"
                              });
                         }
                    })
                    .catch((error) => {
                         console.error("There was an error registering the student!", error);
                    });
          },
     });

     return (
          <>
               <div className='section'>
                    <h4 htmlFor='heading' className='mb-3 fw-bold'>Student Registration</h4>
                    <form noValidate onSubmit={formik.handleSubmit}>
                         <div className="form-floating mb-3">
                              <input
                                   type="text"
                                   className="form-control"
                                   id="fullname"
                                   placeholder="Student Name"
                                   name="fullname"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.fullname}
                              />
                              <label htmlFor="fullname">Student Name</label>
                              {formik.touched.fullname && formik.errors.fullname ? (
                                   <div className="text-danger">{formik.errors.fullname}</div>
                              ) : null}
                         </div>
                         <div className="form-floating mb-3">
                              <select className="form-select" id="gender" aria-label="Floating label select" name="gender" onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.gender}>
                                   <option value=''>--Select--</option>
                                   <option value="Male">Male</option>
                                   <option value="Female">Female</option>
                                   <option value="Other">Other</option>
                              </select>
                              <label htmlFor="gender">Gender</label>
                              {formik.touched.gender && formik.errors.gender ? (
                                   <div className="text-danger">{formik.errors.gender}</div>
                              ) : null}
                         </div>
                         <div className="form-floating mb-3">
                              <input
                                   type="date"
                                   className="form-control"
                                   id="dateofbirth"
                                   placeholder="Date Of Birth"
                                   name="dateofbirth"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.dateofbirth}
                              />
                              <label htmlFor="dateofbirth">Date Of Birth</label>
                              {formik.touched.dateofbirth && formik.errors.dateofbirth ? (
                                   <div className="text-danger">{formik.errors.dateofbirth}</div>
                              ) : null}
                         </div>
                         <div className="form-floating mb-3">
                              <input
                                   type="text"
                                   className="form-control"
                                   id="age"
                                   placeholder="Age"
                                   name="age"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.age}
                              />
                              <label htmlFor="age">Age</label>
                              {formik.touched.age && formik.errors.age ? (
                                   <div className="text-danger">{formik.errors.age}</div>
                              ) : null}
                         </div>
                         <div className="form-floating mb-3">
                              <input
                                   type="email"
                                   className="form-control"
                                   id="email"
                                   placeholder="sample@xyz.com"
                                   name="email"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.email}
                              />
                              <label htmlFor="email">Email</label>
                              {formik.touched.email && formik.errors.email ? (
                                   <div className="text-danger">{formik.errors.email}</div>
                              ) : null}
                         </div>
                         <div className="form-floating mb-3">
                              <input
                                   type="text"
                                   className="form-control"
                                   id="mobilenumber"
                                   placeholder="Mobile Number"
                                   name="mobilenumber"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.mobilenumber}
                              />
                              <label htmlFor="mobilenumber">Mobile Number</label>
                              {formik.touched.mobilenumber && formik.errors.mobilenumber ? (
                                   <div className="text-danger">{formik.errors.mobilenumber}</div>
                              ) : null}
                         </div>
                         <div className="form-floating mb-3">
                              <input
                                   type="password"
                                   className="form-control"
                                   id="password"
                                   placeholder="Password"
                                   name="password"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.password}
                              />
                              <label htmlFor="password">Password</label>
                              {formik.touched.password && formik.errors.password ? (
                                   <div className="text-danger">{formik.errors.password}</div>
                              ) : null}
                         </div>
                         <div className="group-button text-center mt-5">
                              <button type="submit" className="btn btn-primary btn-sm">Register</button>
                              <button type='button' className="btn btn-secondary btn-sm mx-2" onClick={formHandler}>Login</button>
                         </div>
                    </form>
               </div>
          </>
     );
};

export default Register;
