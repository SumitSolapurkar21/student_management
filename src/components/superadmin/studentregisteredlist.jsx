import React from 'react'
import Layout from './layout'
import { Link } from 'react-router-dom'
import './superadmin.css'

const Studentregisteredlist = () => {
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
                         <button type="button" className='btn btn-primary btn-sm export'>Export</button>
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
                              <th>ADDRESS</th>
                              <th>MOBILE NUMBER</th>
                              <th>PASSWORD</th>
                              <th>ACTION</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr>
                              <td>1</td>
                              <td>1</td>
                              <td>1</td>
                              <td>1</td>
                              <td>1</td>
                              <td>1</td>
                              <td>1</td>
                              <td>1</td>
                              <td>1</td>
                         </tr>
                         
                    </tbody>
               </table>
          </Layout>
     )
}

export default Studentregisteredlist