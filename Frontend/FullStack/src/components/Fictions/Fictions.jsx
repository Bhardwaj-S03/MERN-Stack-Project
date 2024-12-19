import React from 'react'
import Navbar from '../Navbar'
import Fiction from '../Fiction'
import Footer1 from '../Footer1'
  
 

function Fictions() {
  return (
   <>
   <Navbar/>
   <div className='min-h-screen'>   
    
      <Fiction/>
    </div>
    <Footer1/>
   </>
  )
}

export default Fictions