import React from 'react'
import Layout from '../superadmin/layout'
import { Link } from 'react-router-dom'
import './student.css'
import { useFormik } from 'formik'

const Studentprofile = () => {

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
               firstname: 'sumit',
               middlename: 'girish',
               lastname: 'solapurkar',
               gender: 'Male',
               dateofbirth: '21-06-2000',
               age: '24',
               email: 'sumit@gmail.com',
               material_status: 'Single',
               mobilenumber: '9999999999',
               nationality: 'Hindu',
               caste: 'kshtriya',
               sub_caste: 'jjhh',
               branch:'',
               year:'',
               admission_category:'Cap Round',


               // family
               fathername: '',
               father_mobilenumber: '1010101010',
               father_occupation: 'business',
               father_income: '2000000',

               mothername: 'jshdk',
               mother_mobilenumber: '1010101010',
               mother_occupation: 'business',
               mother_income: '2000000',

               // address
               country:'',
               state:'',
               city:'',
               pincode:'',
               plotno:'',
               street:'',
               declaration:'',

               // documents
               tenth_marksheet:'',
               twelveth_marksheet:'',
               twelveth_leaving_certificate:'',
               caste_certificate:'',
               nationality_certificate:'',
               aadhar_card:'',
               noncriminal_certificate:''



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
                         <h5>My Profile</h5>
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
                                             id="firstname"
                                             placeholder="First Name"
                                             name="firstname"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.firstname}
                                        />
                                        <label htmlFor="firstname">Student Name</label>
                                        {formik.touched.firstname && formik.errors.firstname ? (
                                             <div className="text-danger">{formik.errors.firstname}</div>
                                        ) : null}
                                   </div>
                                   <div className="form-floating mb-3">
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