import React from 'react'
import First from './components/Home/First'
import Register from "./components/Register"
 import { Route, Routes } from 'react-router-dom'
import Fictions from './components/Fictions/Fictions'
import NonFictions from './components/Non.jsx/NonFictions'
import Childrens from './components/Children/Childrens'
 
 

function App() {
  return (
     <>
     
     <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
      <Route path="/" element={<First/>} />
      <Route path="/fiction" element={<Fictions/>}/>
      <Route path="/non" element={<NonFictions/>}/>
      <Route path="/child" element={<Childrens/>}/>
      <Route path="/Register" element={<Register/>}/>
    </Routes>
     </div>
     
     </>

  )
}

export default App