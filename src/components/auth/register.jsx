import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import "./auth.css"
import UserContext from '../context/stateContext';

const Register = () => {

     const { setShowRegisterForm, setShowLoginForm } = useContext(UserContext);
     const [showModal, setShowModal] = useState(false);

     const formHandler = () => {
          setShowRegisterForm(false);
          setShowLoginForm(true);
     }
     const validate = (values) => {
          const errors = {};

          if (!values.firstname) errors.firstname = "First Name is Required";
          if (!values.middlename) errors.middlename = "Middle Name is Required";
          if (!values.lastname) errors.lastname = "Last Name is Required";
          if (!values.address) errors.address = "Address is Required";
          if (!values.gender) errors.gender = "Gender is Required";
          if (!values.dateofbirth) errors.dateofbirth = "Date Of Birth is Required";
          if (!values.age) errors.age = "Age is Required";
          if (!values.mobilenumber) errors.mobilenumber = "Mobile Number is Required";
          if (!values.password) errors.password = "Password is Required";

          return errors;
     };

     const formik = useFormik({
          initialValues: {
               firstname: 'sumit',
               middlename: 'girish',
               lastname: 'solapurkar',
               gender: '',
               dateofbirth: '',
               age: '',
               email:'',
               mobilenumber: '',
               password: '',
          },
          validate,
          onSubmit: (values, { resetForm }) => {
               console.log(values);
               // resetForm();
               setShowModal(true)
          },
     });

     return (
          <>
               {/* <!-- Modal --> */}
               {showModal && <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                         <div className="modal-content">
                              <div className="modal-header">
                                   <h1 className="modal-title fs-5" id="exampleModalLabel">Success</h1>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                   Student Register Successfully
                              </div>
                              <div className="modal-footer">
                                   <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                   <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={formHandler}>OK</button>
                              </div>
                         </div>
                    </div>
               </div>}
               <div className='section'>
                    <h4 htmlFor='heading' className='mb-3 fw-bold'>Student Registration</h4>
                    <form noValidate onSubmit={formik.handleSubmit}>
                         <div className="form-floating mb-3">
                              <input
                                   type="text"
                                   className="form-control"
                                   id="studentname"
                                   placeholder="Student Name"
                                   name="studentname"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.studentname}
                              />
                              <label htmlFor="studentname">Student Name</label>
                              {formik.touched.studentname && formik.errors.studentname ? (
                                   <div className="text-danger">{formik.errors.studentname}</div>
                              ) : null}
                         </div>
                         <div className="form-floating mb-3">
                              <textarea className="form-control" placeholder="Address.." id="address" onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.address}></textarea>
                              <label htmlFor="address">Address</label>
                              {formik.touched.address && formik.errors.address ? (
                                   <div className="text-danger">{formik.errors.address}</div>
                              ) : null}
                         </div>
                         <div className="form-floating mb-3">
                              <select className="form-select" id="gender" aria-label="Floating label select" onChange={formik.handleChange}
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
                                   type="number"
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
                                   type="number"
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
                                   type="text"
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
                              <button type="submit" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button>
                              <button type='button' className="btn btn-secondary btn-sm mx-2" onClick={formHandler}>Login</button>
                         </div>
                    </form>
               </div>
          </>

     );
};

export default Register;
