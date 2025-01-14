import React from 'react'

function Login() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2' >
        <span className=''>Email</span>
        <br/>
        <input type='email'
        placeholder='enter your email'
        className='outline-none w-80 rounded-sm  '
        ></input>
    </div>
    <div className='mt-4 space-y-2'>
        <span >Password</span>
        <br/>
        <input type='password'
        placeholder='enter your password'
        className='outline-none w-80 rounded-sm'
        ></input>
    </div>

    <div className='mt-4 flex justify-around mb-2'>
        <button className='bg-pink-500 text-white py-2  px-3 hover:bg-pink-700 duration-200 rounded-md'>Login</button>
        <p>Not Registereds?<span className='underline text-blue-500 cursor-pointer'>signup</span></p>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Login