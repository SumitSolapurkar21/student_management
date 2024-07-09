import React, { useEffect, useState } from 'react'
import Layout from './layout'
import './superadmin.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { getnotescount, getstudentcount } from '../../api'
import Swal from 'sweetalert2'

const Dashboard = () => {
     const [studentCount, setStudentCount] = useState('')
     const [notesCounts, setNotesCounts] = useState('')

     const Getstudentcount = async () => {
          try {
               await axios.post(`${getstudentcount}`).then((response) => {
                    setStudentCount(response.data.data)
               })
          } catch (error) {
               Swal.fire({
                    text: `${error}`,
                    icon: "error"
               })
          }
     }

     //  get notes count ...
     const Getnotescount = async () => {
          try {
               await axios.post(`${getnotescount}`).then((response) => {
                    setNotesCounts(response.data.count)
               })
          } catch (error) {
               Swal.fire({
                    text: `${error}`,
                    icon: "error"
               })
          }
     }

     useEffect(() => {
          Getnotescount()
          Getstudentcount();
     }, [])
     return (
          <Layout>
               <div className='d-flex gap-3'>
                    <Link to='/studentregisteredlist'>
                         <div className="card studentcard">
                              <div className="card-body d-flex align-items-center text-center">
                                   <i className="bi bi-people " color='#ffffff' ></i>
                                   <div className='cardcount mx-3 mt2'>
                                        <label htmlFor="label">Total Students</label>
                                        <p className='count mt-1'>{studentCount}</p>
                                   </div>
                              </div>
                         </div>
                    </Link>
                    <Link to='/addnotes'>
                         <div className="card studentcard">
                              <div className="card-body d-flex align-items-center text-center">
                                   <i className="bi bi-people " color='#ffffff' ></i>
                                   <div className='cardcount mx-3 mt2'>
                                        <label htmlFor="label">Notes</label>
                                        <p className='count mt-1'>{notesCounts}</p>
                                   </div>
                              </div>
                         </div>
                    </Link>
               </div>
          </Layout>
     )
}

export default Dashboard