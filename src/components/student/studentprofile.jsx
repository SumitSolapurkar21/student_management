import React, { useEffect, useState } from 'react';
import Layout from '../superadmin/layout';
import { Link, useNavigate } from 'react-router-dom';
import './student.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { getstudentprofile, updatestudentprofile } from '../../api';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const Studentprofile = () => {
     const navigate = useNavigate();
     // states ....
     const [studentProfileData, setStudentProfileData] = useState(null);
     const [isEditing, setIsEditing] = useState(false);


     const storedLoginData = localStorage.getItem('loginData');
     const parsedLoginData = JSON.parse(storedLoginData);
     const student_id = parsedLoginData[0]._id;

     const GetstudentProfileData = async () => {
          try {
               await axios.post(`${getstudentprofile}`, { student_id: student_id }).then((response) => {
                    const { status, message } = response.data;
                    if (status === true) {
                         setStudentProfileData(response.data.data[0]);
                    } else {
                         Swal.fire({
                              text: `${message}`,
                              icon: "error"
                         });
                    }
               })
          } catch (error) {
               Swal.fire({
                    text: `${error}`,
                    icon: "error"
               });
          }
     }

     useEffect(() => {
          GetstudentProfileData();
     }, [student_id]);

     const handleEditClick = () => {
          setIsEditing(!isEditing);
     };
     const validate = (values) => {
          const errors = {};
          return errors;
     };

     const formik = useFormik({
          enableReinitialize: true,
          initialValues: {
               student_id: student_id,
               fullname: studentProfileData?.fullname || studentProfileData?.admin_name,
               gender: studentProfileData?.gender || '',
               dateofbirth: studentProfileData?.dateofbirth || '',
               age: studentProfileData?.age || '',
               email: studentProfileData?.email || '',
               clgname: studentProfileData?.clgname || '',
               mobilenumber: studentProfileData?.username || '',
               password: studentProfileData?.password || '',
          },
          validate,
          onSubmit: async (values) => {
               try {
                    await axios.post(`${updatestudentprofile}`, values).then((response) => {
                         const { status, message } = response.data;
                         if (status === true) {
                              Swal.fire({
                                   text: `${message}`,
                                   icon: "success"
                              });
                              setTimeout(() => {
                                   navigate('/studentdashboard')
                              }, 1000);
                         } else {
                              Swal.fire({
                                   text: `${message}`,
                                   icon: "error"
                              });
                         }
                    })
               } catch (error) {
                    Swal.fire({
                         text: `${error}`,
                         icon: "error"
                    });
               }

          },
     });

     return (
          <Layout>
               <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                         <li className="breadcrumb-item">
                              <Link to='/studentdashboard'>Dashboard</Link>
                         </li>
                         <li className="breadcrumb-item active" aria-current="page">My Profile</li>
                    </ol>
               </nav>
               <div className='containerfluid mt-4'>
                    <div className='student-section d-flex align-items-center'>
                         <h6>My Profile</h6>
                    </div>
                    <div className='personal-info mt-2'>
                         <form noValidate onSubmit={formik.handleSubmit}>
                              <div className='reg-form d-flex flex-wrap gap-2'>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="fullname"
                                             placeholder="Full Name"
                                             name="fullname"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             readOnly={!isEditing}
                                             value={formik.values.fullname}
                                        />
                                        <label htmlFor="fullname">Student Name</label>
                                        {formik.touched.fullname && formik.errors.fullname ? (
                                             <div className="text-danger">{formik.errors.fullname}</div>
                                        ) : null}
                                   </div>

                                   <div className="form-floating mb-3">
                                        <select className="form-select" id="gender" aria-label="Floating label select" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             disabled={!isEditing}
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
                                             placeholder="DOB"
                                             name="dateofbirth"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             readOnly={!isEditing}
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
                                             readOnly={!isEditing}
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
                                             placeholder="Email"
                                             name="email"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             readOnly={!isEditing}
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
                                             readOnly={!isEditing}
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
                                             placeholder="password"
                                             name="password"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             readOnly={!isEditing}
                                             value={formik.values.password}
                                        />
                                        <label htmlFor="password">Password</label>
                                        {formik.touched.password && formik.errors.password ? (
                                             <div className="text-danger">{formik.errors.password}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="clgname"
                                             placeholder="clgname"
                                             name="clgname"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             readOnly={!isEditing}
                                             value={formik.values.clgname}
                                        />
                                        <label htmlFor="clgname">Collage Name</label>
                                        {formik.touched.clgname && formik.errors.clgname ? (
                                             <div className="text-danger">{formik.errors.clgname}</div>
                                        ) : null}
                                   </div>
                              </div>

                              <div className="group-button text-center mt-5">
                                   <button type="submit" className="btn btn-success btn-sm" disabled={!isEditing}>Update</button>
                                   <button
                                        type='button'
                                        className={`btn btn-${!isEditing ? 'primary' : 'danger'} btn-sm mx-2`}
                                        onClick={handleEditClick}
                                   >
                                        {!isEditing ? 'Edit' : 'Cancel'}
                                   </button>
                                   {/* <button type='button' className="btn btn-danger btn-sm mx-2">Cancel</button> */}
                              </div>
                         </form>
                    </div>
               </div>
          </Layout>
     )
}

export default Studentprofile;
