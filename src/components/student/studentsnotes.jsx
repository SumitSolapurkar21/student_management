import React, { useEffect, useState } from 'react'
import Layout from '../superadmin/layout'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { getnotes } from '../../api';
import { Link } from 'react-router-dom';

const Studentsnotes = () => {
     const [notesArray, setNotesArray] = useState([]);

     const getNotes = async () => {
          try {
               await axios.post(`${getnotes}`).then((response) => {
                    const { status, message } = response.data;
                    if (status === true) {
                         setNotesArray(response.data.data)
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
          getNotes();
     }, [])

     return (
          <Layout>
               <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                         <li className="breadcrumb-item">
                              <Link to='/studentdashboard'>Dashboard</Link>
                         </li>
                         <li className="breadcrumb-item active" aria-current="page">Notes</li>
                    </ol>
               </nav>
               <div className='containerfluid mt-4'>
                    <div className='student-section d-flex align-items-center'>
                         <h6>Notes</h6>
                    </div>
                    <div className='notes-div'>
                         {notesArray?.length > 0 && notesArray?.map((note, index) => {
                              return (
                                   <div className="alert alert-success notes-data" role="alert" key={note._id}>
                                        <h4 className="alert-heading">#Notes {index + 1}!</h4>
                                        <p>{note.notes}.</p>

                                   </div>

                              )
                         })}
                    </div>
               </div>

          </Layout>
     )
}

export default Studentsnotes