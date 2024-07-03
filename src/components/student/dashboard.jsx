import React from 'react'
import Layout from '../superadmin/layout'
import { Link } from 'react-router-dom'

const Studentdashboard = () => {
     return (
          <Layout>
               <div className='d-flex gap-3'>
                    <Link to='/studentprofile'>
                         <div className="card studentcard">
                              <div className="card-body d-flex align-items-center text-center">
                                   <i className="bi bi-people " color='#ffffff' ></i>
                                   <div className='cardcount mx-3 mt2'>
                                        <label htmlFor="label">My Profile</label>
                                   </div>
                              </div>
                         </div>
                    </Link>
               </div>
          </Layout>
     )
}

export default Studentdashboard