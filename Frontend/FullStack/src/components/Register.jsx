import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Register() {
  return (
   <>
   <div className='flex h-screen items-center justify-center  '> 
   <div id=" " className='w-[600px]'>
  <div className="modal-box  ">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Register</h3>

 {/* name */}
 <div className='mt-4 space-y-2'>
                <span>Name</span><br></br>
                <input type="text" name="name" placeholder=" Enter your name here" 
                className="input w-80 px-3 py-1 border rounded-md outline-none
                " />
    </div>
    {/* email */}
    <div className='mt-4 space-y-2'>
                <span>E-mail</span><br></br>
                <input type="email" name="email" placeholder=" Enter your email" 
                className="input w-80 px-3 py-1 border rounded-md outline-none
                " />
    </div>

    {/* password */}
    <div className='mt-4 space-y-2'>
                <span>Password</span><br></br>
                <input type="text" name="email" placeholder=" Enter your password" 
                className="input w-80 px-3 py-1 border rounded-md outline-none
                " />
    </div>

    <div className='mt-4 space-y-2'>
                <span>Confirm Password</span><br></br>
                <input type="text" name="email" placeholder=" Enter your password" 
                className="input w-80 px-3 py-1 border rounded-md outline-none
                " />
    </div>

{/* button */}
       <div className='flex justify-around mt-4'>
                <button className='bg-orange-500 text-white rounded px-3 py-1 hover:bg-orange-700 duration-200'>Register</button>
                <p>HaveAccount?
                 <button className='underline text-blue-700 cursor-pointer'
                 onClick={()=>document.getElementById("my_modal_3").showModal()}> Login</button>
                 <Login/></p> 
       </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Register
