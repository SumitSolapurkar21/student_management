import React, { useEffect, useState } from 'react'
import Layout from '../superadmin/layout'
import { Link } from 'react-router-dom'
import './student.css'
import { useFormik } from 'formik'
import axios from 'axios'
import { getstudentprofile } from '../../api'
import Swal from 'sweetalert2/dist/sweetalert2.js'

const Studentprofile = () => {

     const [studentProfileData, setStudentProfileData] = useState([]);

     const storedLoginData = localStorage.getItem('loginData');
     const parsedLoginData = JSON.parse(storedLoginData);
     const student_id = parsedLoginData[0]._id;

     const GetstudentProfileData = async () => {
          try {
               await axios.post(`${getstudentprofile}`, { student_id: student_id }).then((response) => {
                    const { status, message } = response.data;
                    if (status === true) {
                         setStudentProfileData(response.data.data)
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
     }, [student_id])

     const validate = (values) => {
          const errors = {};

          if (!values.studentname) errors.studentname = "Student Name is Required";
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

               // personal
               fullname: studentProfileData[0]?.admin_name,
               gender: studentProfileData[0]?.gender,
               dateofbirth: studentProfileData[0]?.dateofbirth,
               age: studentProfileData[0]?.age,
               email: studentProfileData[0]?.email,
               clgname: studentProfileData[0]?.clgname,
               username: studentProfileData[0]?.username,
               password: studentProfileData[0]?.password,
               // material_status: 'Single',
               // nationality: 'Hindu',
               // caste: 'kshtriya',
               // sub_caste: 'jjhh',
               // branch: '',
               // year: '',
               // admission_category: 'Cap Round',
               // // family
               // fathername: '',
               // father_mobilenumber: '1010101010',
               // father_occupation: 'business',
               // father_income: '2000000',

               // mothername: 'jshdk',
               // mother_mobilenumber: '1010101010',
               // mother_occupation: 'business',
               // mother_income: '2000000',

               // // address
               // country: '',
               // state: '',
               // city: '',
               // pincode: '',
               // plotno: '',
               // street: '',
               // declaration: '',

               // // documents
               // tenth_marksheet: '',
               // twelveth_marksheet: '',
               // twelveth_leaving_certificate: '',
               // caste_certificate: '',
               // nationality_certificate: '',
               // aadhar_card: '',
               // noncriminal_certificate: ''



          },
          validate,
          onSubmit: (values, { resetForm }) => {
               console.log(values);
               // resetForm();
          },
     });
     return (
          <Layout>
               <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                         <li className="breadcrumb-item">
                              <Link to='/studentprofile'>Dashboard</Link>
                         </li>
                         <li className="breadcrumb-item active" aria-current="page">My Profile</li>
                    </ol>
               </nav>
               <div className='containerfluid mt-4'>
                    <div className='student-section d-flex align-items-center'>
                         <h6>My Profile</h6>
                    </div>
                    <div className='personal-info mt-2'>
                         {/* <div className='personal-info-content d-flex align-items-center'>
                              <div className='border-div'></div>
                              <h5 className='profile-heading text-center'>Personal Info</h5>
                              <div className='border-div'></div>
                         </div> */}
                         <form noValidate onSubmit={formik.handleSubmit}>
                              <div className='reg-form d-flex flex-wrap gap-2'>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="fullname"
                                             placeholder="First Name"
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
                                   {/* <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="middlename"
                                             placeholder="Middle Name"
                                             name="middlename"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.middlename}
                                        />
                                        <label htmlFor="middlename">Middle Name</label>
                                        {formik.touched.middlename && formik.errors.middlename ? (
                                             <div className="text-danger">{formik.errors.middlename}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="lastname"
                                             placeholder="Last Name"
                                             name="lastname"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.lastname}
                                        />
                                        <label htmlFor="lastname">Last Name</label>
                                        {formik.touched.lastname && formik.errors.lastname ? (
                                             <div className="text-danger">{formik.errors.lastname}</div>
                                        ) : null}
                                   </div> */}
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
                                             placeholder="DOB"
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
                                             placeholder="Email"
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
                                             id="nationality"
                                             placeholder="Nationality"
                                             name="nationality"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.nationality}
                                        />
                                        <label htmlFor="nationality">Nationality</label>
                                        {formik.touched.nationality && formik.errors.nationality ? (
                                             <div className="text-danger">{formik.errors.nationality}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="caste"
                                             placeholder="Caste"
                                             name="caste"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.caste}
                                        />
                                        <label htmlFor="caste">Caste</label>
                                        {formik.touched.caste && formik.errors.caste ? (
                                             <div className="text-danger">{formik.errors.caste}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="sub_caste"
                                             placeholder="Sub-Caste"
                                             name="sub_caste"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.sub_caste}
                                        />
                                        <label htmlFor="sub_caste">Sub-Caste</label>
                                        {formik.touched.sub_caste && formik.errors.sub_caste ? (
                                             <div className="text-danger">{formik.errors.sub_caste}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <select className="form-select" id="branch" aria-label="Floating label select" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.branch}>
                                             <option value=''>--Select--</option>
                                             <option value="BE">BE</option>
                                             <option value="BTECH">B.TECH</option>
                                             <option value="MTECH">M.TECH</option>
                                        </select>
                                        <label htmlFor="branch">Branch</label>
                                        {formik.touched.branch && formik.errors.branch ? (
                                             <div className="text-danger">{formik.errors.branch}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <select className="form-select" id="year" aria-label="Floating label select" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.year}>
                                             <option value=''>--Select--</option>
                                             <option value="1st">1st</option>
                                             <option value="2nd">2nd</option>
                                             <option value="3rd">3rd</option>
                                             <option value="4th">4th</option>
                                        </select>
                                        <label htmlFor="year">Year</label>
                                        {formik.touched.year && formik.errors.year ? (
                                             <div className="text-danger">{formik.errors.year}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <select className="form-select" id="admission_category" aria-label="Floating label select" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.admission_category}>
                                             <option value=''>--Select--</option>
                                             <option value="Cap Round">Cap Round</option>
                                             <option value="Institute Level Quota">Institute Level Quota</option>
                                        </select>
                                        <label htmlFor="admission_category">admission_category</label>
                                        {formik.touched.admission_category && formik.errors.admission_category ? (
                                             <div className="text-danger">{formik.errors.admission_category}</div>
                                        ) : null}
                                   </div>
                              </div>
                              {/*family information  */}
                              <div className='student-section d-flex align-items-center'>
                                   <h6>Family Information</h6>
                              </div>
                              <div className='reg-form d-flex flex-wrap gap-2'>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="fathername"
                                             placeholder="Father Name"
                                             name="fathername"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.fathername}
                                        />
                                        <label htmlFor="fathername">Father Name</label>
                                        {formik.touched.fathername && formik.errors.fathername ? (
                                             <div className="text-danger">{formik.errors.fathername}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="father_mobilenumber"
                                             placeholder="Father Mobile Number"
                                             name="father_mobilenumber"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.father_mobilenumber}
                                        />
                                        <label htmlFor="father_mobilenumber">Father Mobile Number</label>
                                        {formik.touched.father_mobilenumber && formik.errors.father_mobilenumber ? (
                                             <div className="text-danger">{formik.errors.father_mobilenumber}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="father_occupation"
                                             placeholder="Occupation"
                                             name="father_occupation"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.father_occupation}
                                        />
                                        <label htmlFor="father_occupation">Father Occupation</label>
                                        {formik.touched.father_occupation && formik.errors.father_occupation ? (
                                             <div className="text-danger">{formik.errors.father_occupation}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="father_income"
                                             placeholder="DOB"
                                             name="father_income"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.father_income}
                                        />
                                        <label htmlFor="father_income">Father Income</label>
                                        {formik.touched.father_income && formik.errors.father_income ? (
                                             <div className="text-danger">{formik.errors.father_income}</div>
                                        ) : null}
                                   </div>
                                   <hr />
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="mothername"
                                             placeholder="Mother Name"
                                             name="mothername"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.mothername}
                                        />
                                        <label htmlFor="mothername">Mother Name</label>
                                        {formik.touched.mothername && formik.errors.mothername ? (
                                             <div className="text-danger">{formik.errors.mothername}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="mother_mobilenumber"
                                             placeholder="Mother Mobile Number"
                                             name="mother_mobilenumber"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.mother_mobilenumber}
                                        />
                                        <label htmlFor="mother_mobilenumber">Mother Mobile Number</label>
                                        {formik.touched.mother_mobilenumber && formik.errors.mother_mobilenumber ? (
                                             <div className="text-danger">{formik.errors.mother_mobilenumber}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="mother_occupation"
                                             placeholder="Occupation"
                                             name="mother_occupation"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.mother_occupation}
                                        />
                                        <label htmlFor="mother_occupation">Mother Occupation</label>
                                        {formik.touched.mother_occupation && formik.errors.mother_occupation ? (
                                             <div className="text-danger">{formik.errors.mother_occupation}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="mother_income"
                                             placeholder="Mothet Income"
                                             name="mother_income"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.mother_income}
                                        />
                                        <label htmlFor="mother_income">Mother Income</label>
                                        {formik.touched.mother_income && formik.errors.mother_income ? (
                                             <div className="text-danger">{formik.errors.mother_income}</div>
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
                                             placeholder="DOB"
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
                                             placeholder="Email"
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
                                             id="nationality"
                                             placeholder="Nationality"
                                             name="nationality"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.nationality}
                                        />
                                        <label htmlFor="nationality">Nationality</label>
                                        {formik.touched.nationality && formik.errors.nationality ? (
                                             <div className="text-danger">{formik.errors.nationality}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="caste"
                                             placeholder="Caste"
                                             name="caste"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.caste}
                                        />
                                        <label htmlFor="caste">Caste</label>
                                        {formik.touched.caste && formik.errors.caste ? (
                                             <div className="text-danger">{formik.errors.caste}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="sub_caste"
                                             placeholder="Sub-Caste"
                                             name="sub_caste"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.sub_caste}
                                        />
                                        <label htmlFor="sub_caste">Sub-Caste</label>
                                        {formik.touched.sub_caste && formik.errors.sub_caste ? (
                                             <div className="text-danger">{formik.errors.sub_caste}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <select className="form-select" id="branch" aria-label="Floating label select" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.branch}>
                                             <option value=''>--Select--</option>
                                             <option value="BE">BE</option>
                                             <option value="BTECH">B.TECH</option>
                                             <option value="MTECH">M.TECH</option>
                                        </select>
                                        <label htmlFor="branch">Branch</label>
                                        {formik.touched.branch && formik.errors.branch ? (
                                             <div className="text-danger">{formik.errors.branch}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <select className="form-select" id="year" aria-label="Floating label select" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.year}>
                                             <option value=''>--Select--</option>
                                             <option value="1st">1st</option>
                                             <option value="2nd">2nd</option>
                                             <option value="3rd">3rd</option>
                                             <option value="4th">4th</option>
                                        </select>
                                        <label htmlFor="year">Year</label>
                                        {formik.touched.year && formik.errors.year ? (
                                             <div className="text-danger">{formik.errors.year}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <select className="form-select" id="admission_category" aria-label="Floating label select" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.admission_category}>
                                             <option value=''>--Select--</option>
                                             <option value="Cap Round">Cap Round</option>
                                             <option value="Institute Level Quota">Institute Level Quota</option>
                                        </select>
                                        <label htmlFor="admission_category">admission_category</label>
                                        {formik.touched.admission_category && formik.errors.admission_category ? (
                                             <div className="text-danger">{formik.errors.admission_category}</div>
                                        ) : null}
                                   </div>
                              </div>

                              {/* addresss */}
                              <div className='student-section d-flex align-items-center'>
                                   <h6>Address</h6>
                              </div>
                              <div className='reg-form d-flex flex-wrap gap-2'>
                                   <div className="form-floating mb-3">
                                        <select className="form-select" id="country" aria-label="Floating label select" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.country}>
                                             <option value=''>--Select--</option>
                                             <option value="India">India</option>
                                             <option value="America">America</option>
                                             <option value="Austria">Austria</option>
                                        </select>
                                        <label htmlFor="country">Country</label>
                                        {formik.touched.country && formik.errors.country ? (
                                             <div className="text-danger">{formik.errors.country}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <select className="form-select" id="state" aria-label="Floating label select" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.state}>
                                             <option value=''>--Select--</option>
                                             <option value="India">India</option>
                                             <option value="America">America</option>
                                             <option value="Austria">Austria</option>
                                        </select>
                                        <label htmlFor="state">State</label>
                                        {formik.touched.state && formik.errors.state ? (
                                             <div className="text-danger">{formik.errors.state}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <select className="form-select" id="city" aria-label="Floating label select" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.city}>
                                             <option value=''>--Select--</option>
                                             <option value="India">India</option>
                                             <option value="America">America</option>
                                             <option value="Austria">Austria</option>
                                        </select>
                                        <label htmlFor="city">City</label>
                                        {formik.touched.city && formik.errors.city ? (
                                             <div className="text-danger">{formik.errors.city}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="number"
                                             className="form-control"
                                             id="pincode"
                                             placeholder="Pincode"
                                             name="pincode"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.pincode}
                                        />
                                        <label htmlFor="pincode">Pincode</label>
                                        {formik.touched.pincode && formik.errors.pincode ? (
                                             <div className="text-danger">{formik.errors.pincode}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="plotno"
                                             placeholder="Plot No"
                                             name="plotno"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.plotno}
                                        />
                                        <label htmlFor="plotno">Plot No</label>
                                        {formik.touched.plotno && formik.errors.plotno ? (
                                             <div className="text-danger">{formik.errors.plotno}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="street"
                                             placeholder="Street"
                                             name="street"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.street}
                                        />
                                        <label htmlFor="street">Street</label>
                                        {formik.touched.street && formik.errors.street ? (
                                             <div className="text-danger">{formik.errors.street}</div>
                                        ) : null}
                                   </div>

                              </div>
                              {/* Documents */}
                              <div className='student-section d-flex align-items-center'>
                                   <h6>Documents</h6>
                              </div>
                              <div className='reg-form'>
                                   <div className="form-check">
                                        <input className="form-check-input" type="checkbox" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.tenth_marksheet} id="tenth_marksheet" />
                                        <label className="form-check-label" htmlFor="tenth_marksheet">
                                             10th Marksheet
                                        </label>
                                   </div>
                                   <div className="form-check">
                                        <input className="form-check-input" type="checkbox" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.twelveth_marksheet} id="twelveth_marksheet" />
                                        <label className="form-check-label" htmlFor="twelveth_marksheet">
                                             12th Marksheet
                                        </label>
                                   </div>
                                   <div className="form-check">
                                        <input className="form-check-input" type="checkbox" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.twelveth_leaving_certificate} id="twelveth_leaving_certificate" />
                                        <label className="form-check-label" htmlFor="twelveth_leaving_certificate">
                                             12th Leaving Certificate
                                        </label>
                                   </div>
                                   <div className="form-check">
                                        <input className="form-check-input" type="checkbox" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.caste_certificate} id="caste_certificate" />
                                        <label className="form-check-label" htmlFor="caste_certificate">
                                             Caste Certificate
                                        </label>
                                   </div>
                                   <div className="form-check">
                                        <input className="form-check-input" type="checkbox" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.nationality_certificate} id="nationality_certificate" />
                                        <label className="form-check-label" htmlFor="nationality_certificate">
                                             Nationality Cetrificate
                                        </label>
                                   </div>
                                   <div className="form-check">
                                        <input className="form-check-input" type="checkbox" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.aadhar_card} id="aadhar_card" />
                                        <label className="form-check-label" htmlFor="aadhar_card">
                                             AAdhar Card
                                        </label>
                                   </div>
                                   <div className="form-check">
                                        <input className="form-check-input" type="checkbox" onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.noncriminal_certificate} id="noncriminal_certificate" />
                                        <label className="form-check-label" htmlFor="noncriminal_certificate">
                                             Non-Criminal Certificate
                                        </label>
                                   </div>

                              </div>
                              <div className="group-button text-center mt-5">
                                   <button type="submit" className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Save</button>
                                   <button type='button' className="btn btn-primary btn-sm mx-2" >Edit</button>
                                   <button type='button' className="btn btn-danger btn-sm mx-2" >Cancle</button>
                              </div>
                         </form>
                    </div>
               </div>
          </Layout>
     )
}

export default Studentprofile