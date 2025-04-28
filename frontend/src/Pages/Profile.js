import React from 'react'
import { CgProfile } from "react-icons/cg";
import '../Styles/Profile.css'
const Profile = () => {
  return (
    <>
        <div className='profile' >
              <div className='p-bar' >
              <h4 className='flex justify-start m-2' >Welcome, User</h4>
              <h3 className='mt-2' > < CgProfile size={30} /> Profile</h3>
              </div>
              <div className=' flex items-center gap-2 row-2  ' >
                  <label>Name : </label>
                  <br/>
                  <input type="text" style={{'width':'250px'}}/>
                  <input type="text" className=' p-col' style={{'width':'250px'}}/>


              </div>  
         </div>

    </>
  )
}

export default Profile