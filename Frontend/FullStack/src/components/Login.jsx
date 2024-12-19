import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
     <>
     <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Login</h3>

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

{/* button */}
       <div className='flex justify-around mt-4'>
                <button className='bg-orange-500 text-white rounded px-3 py-1 hover:bg-orange-700 duration-200'>Login</button>
                <p>Not Registered?
                 <Link to="/Register" className='underline text-blue-700 cursor-pointer'> Register</Link></p>
       </div>
  </div>
</dialog>
     </div>
     </>
  )
}

export default Login
