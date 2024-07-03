import React from 'react'
import Navbar from '../navbar/navbar'


const Layout = ({ children }) => {
     return (
          <>
               <Navbar />
               <div className='m-3'>
                    {children}
               </div>
          </>
     )
}

export default Layout