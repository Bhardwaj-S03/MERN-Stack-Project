import React from 'react'
import Navbar from '../Navbar'
import NonFiction from '../NonFiction'
import Footer1 from '../Footer1'

function NonFictions() {
  return (
     <>
    <Navbar/>
   <div className='min-h-screen'>   
    
      <NonFiction/>
    </div>
    <Footer1/>
     </>
  )
}

export default NonFictions
