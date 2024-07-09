import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../auth/layout';
import Dashboard from '../superadmin/dashboard';
import Studentregisteredlist from '../superadmin/studentregisteredlist';
import Studentdashboard from '../student/dashboard';
import Studentprofile from '../student/studentprofile';
import Addnotes from '../superadmin/addnotes';
import Studentsnotes from '../student/studentsnotes';

const RouteComponent = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route index="/" element={<Layout />} />

                    {/* role superadmin */}
                    <Route path="/superadmindashboard" element={<Dashboard />} />
                    <Route path="/studentregisteredlist" element={<Studentregisteredlist />} />
                    <Route path="/addnotes" element={<Addnotes />} />

                    {/* role student */}
                    <Route path="/studentdashboard" element={<Studentdashboard />} />
                    <Route path="/studentprofile" element={<Studentprofile />} />
                    <Route path="/studentnotes" element={<Studentsnotes />} />
               </Routes>
          </BrowserRouter>
     )
}

export default RouteComponent