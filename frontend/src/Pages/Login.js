import React from 'react'
// import  '../Styles/Login.css'
const Login = () => {
  return (
    <>
    <form className='m-auto w-50' >
  <div class="mb-3 m-5">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" />
  </div>
  <div class="mb-3 m-5">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary d-grid gap-2 col-2 mt-3 mx-auto">Submit</button>
</form>
    </>
  )
}

export default Login