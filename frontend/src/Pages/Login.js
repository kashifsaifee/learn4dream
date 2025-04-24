import React from 'react'
import  '../Styles/Login.css'
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

// import loginImage from './login.jpg'
const Login = () => {
  return (
    <>
    <div>
      <h4 className='text-white text-center' >Welcome back</h4>
      <h5 className='text-white text-center'>Login to your account </h5>
    <form className='m-auto w-50' >
  <div class="mb-3 m-5 mt-5">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" placeholder='xyz@gmail.com'ce class="form-control" id="exampleInputEmail1" />
  </div>
  <div class="mb-3 m-5">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" placeholder='xxxxxxx' class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-secondary d-grid gap-2 col-2 mt-3 mx-auto">Continue</button>

  <p className='text-center' >or continue with </p>
  <div className='flex justify-between pl-3' >
  <button className='btn text-white  '> <FaGithub size={22}/>  Github</button>
  <button className='btn text-white  '> <FaGoogle size={22} /> Google</button>
  </div>
</form>
</div>


     
     
    </>
  )
}

export default Login