import React, { useState } from 'react'
import './ChangePass.css'

import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  // add the state members for inputs
  const [currPass, setCurrPass] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // get the user from AuthContext
  // const { setUser } = useAuth()

  // get navigate function reference
  //const navigate = useNavigate()

  // click event handler of Login button
  const onRegister = async () => {
    if (currPass.length == 0) {
      toast.warning('please enter current password')
    } else if (newPassword.length == 0) {
      toast.warning('please enter new password')
    } 
    else if (confirmPassword.length == 0) {
      toast.warning('please enter Confirmed password')
    }else if (newPassword != confirmPassword) {
          toast.warning('password does not match')
        }else {
      // const response = await login(email, password)
      // if (response['status'] == 'success') {
      //   toast.success('login successful')

      //   // get the token from response and cache it in local storage
      //   localStorage.setItem('token', response['data']['token'])
      //   // localStorage.setItem('firstName', response['data']['firstName'])
      //   // localStorage.setItem('lastName', response['data']['lastName'])

      //   // set the logged in user information
      //   setUser({
      //     firstName: response['data']['firstName'],
      //     lastName: response['data']['lastName'],
      //   })

      //   // navigate to the PropertyListing page
      //   navigate('/home/properties')
      // } else {
      //   toast.error(response['error'])
      // }
    }
  }

  return (
    <div className='container' >
      <br/>
      <h2 >Change Password</h2>
      <br />
      <div >
        {/* first name last name*/}
        
          <div className='mb-3 '>
            <label htmlFor=''>Current Password</label>
            <input
              onChange={(e) => setCurrPass(e.target.value)}
              type='password'
              className='form-control'
            />
          </div>

          
        
        <div className='mb-3 '>
            <label htmlFor=''>New Password</label>
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              type='text'
              className='form-control'
            />
          </div>
        {/* email */}
        <div className='mb-3'>
          <label htmlFor=''>Confirm New Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='email'
            className='form-control'
          />
        </div>
       
        {/* Save button */}
        <div>
          <button
            onClick={onRegister}
            className='btn btn-primary registerbutton'
          >
            Save Changes
          </button>
        </div>
        

      </div>
    </div>
  )
}

export default Login
