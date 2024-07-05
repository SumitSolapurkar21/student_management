import React, { useEffect, useState } from 'react'
import Layout from './layout'
import { Link } from 'react-router-dom'
import './superadmin.css'
import axios from 'axios'
import { givestudentaccess, studentlist } from '../../api'
import Swal from 'sweetalert2/dist/sweetalert2.js'

const Studentregisteredlist = () => {

     const [studentData, setStudentData] = useState([])

     const storedLoginData = localStorage.getItem('loginData');
     const parsedLoginData = JSON.parse(storedLoginData);
     const student_id = parsedLoginData && parsedLoginData[0]?._id

     const getstudentlist = async () => {
          try {
               await axios.post(`${studentlist}`).then((response) => {
                    const { status, message } = response.data;
                    if (status === true) {
                         setStudentData(response.data.data)
                    } else {
                         Swal.fire({
                              text: `${message}`,
                              icon: "error"
                         });
                    }
               })
          } catch (error) {


          }
     }

     useEffect(() => {
          getstudentlist();
     }, [student_id])

     const handleToggleChange = async (student_id, currentStatus) => {
          const newStatus = !currentStatus; // Toggle the status

          const updatedStudentData = studentData.map(student => {
               if (student._id === student_id) {
                    return { ...student, active_status: newStatus };
               }
               return student;
          });
          setStudentData(updatedStudentData);

          try {
               await axios.post(`${givestudentaccess}`, { student_id, active_status: newStatus })
                    .then(response => {
                         const { status, message } = response.data;
                         if (status === true) {
                              Swal.fire({
                                   text: `${message}`,
                                   icon: "success"
                              });
                         } else {
                              Swal.fire({
                                   text: `${message}`,
                                   icon: "error"
                              });
                         }
                    });
          } catch (error) {
               console.error("Error updating student status:", error);
               // Optionally revert the change in case of an error
               const revertedStudentData = studentData.map(student => {
                    if (student._id === student_id) {
                         return { ...student, active_status: currentStatus };
                    }
                    return student;
               });
               setStudentData(revertedStudentData);
          }
     };

     return (
          <Layout>
               <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                         <li className="breadcrumb-item">
                              <Link to='/superadmindashboard'>Dashboard</Link>
                         </li>
                         <li className="breadcrumb-item active" aria-current="page">Students List</li>
                    </ol>
               </nav>
               <div className='containerfluid mt-4'>
                    <div className='student-section d-flex align-items-center'>
                         <h4>Students List</h4>
                         {/* <button type="button" className='btn btn-primary btn-sm export'>Export</button> */}
                    </div>
               </div>
               {/* table */}
               <table className="table table-responsive table-striped mt-2" >
                    <thead>
                         <tr>
                              <th>SR.NO</th>
                              <th>STUDENT NAME</th>
                              <th>GENDER</th>
                              <th>DOB</th>
                              <th>AGE</th>
                              <th>MOBILE NUMBER</th>
                              <th>PASSWORD</th>
                              <th>ACTION</th>
                         </tr>
                    </thead>
                    <tbody>
                         {studentData.length > 0 ? (
                              studentData.map((student, index) => (
                                   <tr key={student._id}>
                                        <td>{index + 1}</td>
                                        <td>{student.admin_name}</td>
                                        <td>{student.gender}</td>
                                        <td>{student.dateofbirth}</td>
                                        <td>{student.age}</td>
                                        <td>{student.username}</td>
                                        <td>{student.password}</td>
                                        <td>
                                             <div className="form-check form-switch">
                                                  <input className="form-check-input" type="checkbox" role="switch" id={`flexSwitchCheckChecked${student._id}`}
                                                       checked={student.active_status}
                                                       onChange={() => handleToggleChange(student._id, student.active_status)}
                                                  />
                                             </div>
                                        </td>
                                   </tr>
                              ))
                         ) : (
                              <tr>
                                   <td colSpan="9" className="text-center">No students found</td>
                              </tr>
                         )}
                    </tbody>
               </table>
          </Layout>
     )
}

export default Studentregisteredlist