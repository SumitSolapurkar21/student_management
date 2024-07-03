import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../auth/layout';
import Dashboard from '../superadmin/dashboard';
import Studentregisteredlist from '../superadmin/studentregisteredlist';
import Studentdashboard from '../student/dashboard';
import Studentprofile from '../student/studentprofile';

const RouteComponent = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Layout />} />

                    {/* role superadmin */}
                    <Route path="/superadmindashboard" element={<Dashboard />} />
                    <Route path="/studentregisteredlist" element={<Studentregisteredlist />} />

                    {/* role student */}
                    <Route path="/studentdashboard" element={<Studentdashboard />} />
                    <Route path="/studentprofile" element={<Studentprofile />} />
               </Routes>
          </BrowserRouter>
     )
}

export default RouteComponent