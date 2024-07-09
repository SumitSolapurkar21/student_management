import React, { useEffect, useState } from 'react'
import Layout from './layout'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import { addnotes, deletenotes, getnotes, updatenotes } from '../../api';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const Addnotes = () => {
     const [notesArray, setNotesArray] = useState([]);
     const [showPopup, setShowPopup] = useState(true);

     // edit handler....
     const editPopupHandler = (id) => {
          const _filterNote = notesArray?.filter((note) => note._id === id)
          const _notes = _filterNote[0].notes

          Swal.fire({
               inputLabel: 'Notes',
               input: 'textarea',
               inputValue: _notes,
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Update",
               preConfirm: () => {
                    // Capture the new value from the textarea input
                    const newNotes = Swal.getInput().value;
                    return axios.post(`${updatenotes}`, {
                         notes_id: id,
                         notes: newNotes
                    }).then((response) => {
                         const { status, message } = response.data;
                         if (status === true) {
                              Swal.fire({
                                   title: "Updated!",
                                   text: message,
                                   icon: "success"
                              });
                              getNotes();
                         } else {
                              Swal.fire({
                                   title: "Update failed!",
                                   text: message,
                                   icon: "error"
                              });
                         }
                    }).catch((error) => {
                         Swal.showValidationMessage(`Request failed: ${error}`);
                    });
               }
          });
     }


     //  delete handler ...
     const deleteNotesHandler = (id) => {
          const _filterNote = notesArray?.filter((note) => note._id === id)
          const _id = _filterNote[0]._id

          Swal.fire({
               title: "Are you sure you want to delete?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Delete",
               preConfirm: () => {
                    return axios.post(`${deletenotes}`, {
                         notes_id: _id,
                    }).then((response) => {
                         const { status, message } = response.data;
                         if (status === true) {
                              Swal.fire({
                                   title: "Delete!",
                                   text: message,
                                   icon: "success"
                              });
                              getNotes();
                         } else {
                              Swal.fire({
                                   title: "Delete failed!",
                                   text: message,
                                   icon: "error"
                              });
                         }
                    }).catch((error) => {
                         Swal.fire({
                              title: "Delete failed!",
                              text: { error },
                              icon: "error"
                         });
                    });
               }
          });

     }

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

     const formik = useFormik({
          initialValues: {
               notes: ''
          },
          onSubmit: async (values, { resetForm }) => {
               await axios.post(`${addnotes}`, values)
                    .then((response) => {
                         console.log(response)
                         const { status, message } = response.data;
                         if (status === true) {
                              Swal.fire({
                                   text: `${message}`,
                                   icon: "success"
                              });
                              resetForm();
                              getNotes();
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
          <Layout>
               {!showPopup && (
                    <div className="modal fade" tabIndex="-1">
                         <div className="modal-dialog">
                              <div className="modal-content">
                                   <div className="modal-header">
                                        <h5 className="modal-title">Edit Notes</h5>
                                        <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowPopup(false)}></button>
                                   </div>
                                   <div className="modal-body">
                                        <p>Modal body text goes here.</p>
                                   </div>
                                   <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowPopup(false)}>Close</button>
                                        <button type="button" className="btn btn-primary btn-sm">Save changes</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               )}
               <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                         <li className="breadcrumb-item">
                              <Link to='/superadmindashboard'>Dashboard</Link>
                         </li>
                         <li className="breadcrumb-item active" aria-current="page">Add Notes</li>
                    </ol>
               </nav>
               <div className='containerfluid mt-4'>
                    <div className='student-section d-flex align-items-center'>
                         <h4>Notes</h4>
                         {/* <button type="button" className='btn btn-primary btn-sm export'>Export</button> */}
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                         <div className="form-floating">
                              <textarea className="form-control" placeholder="Leave a comment here" id="notes" value={formik.values.notes} style={{ height: '200px' }} onChange={formik.handleChange} ></textarea>
                              <label htmlFor="notes">Notes</label>
                         </div>
                         <div className="group-button text-center mt-2">
                              <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                              <button type='button' className="btn btn-danger btn-sm mx-2" onClick={formik.resetForm}>Clear</button>
                         </div>
                    </form>

                    {/* table */}
                    <table className="table table-responsive table-striped mt-2" >
                         <thead>
                              <tr>
                                   <th style={{ width: '50px' }}>SR.NO</th>
                                   <th>NOTES</th>
                                   <th style={{ width: '200px' }}>ACTION</th>
                              </tr>
                         </thead>
                         <tbody>
                              {notesArray?.length > 0 ? (
                                   notesArray?.map((notes, index) => (
                                        <tr key={notes._id}>
                                             <td>{index + 1}</td>
                                             <td>{notes.notes}</td>
                                             <td>
                                                  <div className="action-button">
                                                       <button type="button" className='btn btn-primary btn-sm' onClick={() => editPopupHandler(notes._id)}>
                                                            <i className="bi bi-pencil-square"></i>
                                                       </button>
                                                       <button type="button" className='btn btn-danger btn-sm mx-2' onClick={() => deleteNotesHandler(notes._id)}>
                                                            <i className="bi bi-trash"></i>
                                                       </button>
                                                  </div>
                                             </td>
                                        </tr>
                                   ))
                              ) : (
                                   <tr>
                                        <td colSpan="9" className="text-center">No Notes   found</td>
                                   </tr>
                              )}
                         </tbody>
                    </table>
               </div>
          </Layout>
     )
}

export default Addnotes