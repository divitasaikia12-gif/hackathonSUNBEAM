import React, { useState } from 'react'
import './Register.css'
import { register } from '../../services/users'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  // define state members for getting user inputs
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState();
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // get navigate function reference
  const navigate = useNavigate()

  const onRegister = async () => {
    if (firstName.length == 0) {
      toast.warning('please enter first name')
    } else if (lastName.length == 0) {
      toast.warning('please enter last name')
    } else if (email.length == 0) {
      toast.warning('please enter email')
    } else if (phone.length == 0) {
      toast.warning('please enter Mobile number')
    } else if (date.length == 0) {
      toast.warning('please enter date of birth')
    }else if (password.length == 0) {
      toast.warning('please enter password')
    } else if (confirmPassword.length == 0) {
      toast.warning('please confirm password')
    } else if (password != confirmPassword) {
      toast.warning('password does not match')
    } else {
      const response = await register(
        firstName,
        lastName,
        email,
        password,
        phone
      )
      if (response['status'] === 'success') {
        toast.success('Successfully registered user')

        // go to the Login page
        navigate('/')
      } else {
        toast.error(response['error'])
      }
    }
  }

  return (
    <div className='container'>
      <h2 className='page-header'>Sign Up</h2>
      <div className='register-container'>
        {/* first name last name*/}
        <div className='r1'>
          <div className='mb-3 firstname'>
            <label htmlFor=''>First Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type='text'
              className='form-control'
            />
          </div>

          <div className='mb-3 lastname'>
            <label htmlFor=''>Last Name</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type='text'
              className='form-control'
            />
          </div>
        </div>
        {/* email */}
        <div className='mb-3'>
          <label htmlFor=''>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='form-control'
          />
        </div>
        {/* contact */}
        <div className='mb-3'>
          <label htmlFor=''>Mobile Number</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type='tel'
            className='form-control'
          />
        </div>
        {/* DOB */}
        <div className='mb-3'>
          <label htmlFor=''>Date of Birth</label>
          <input
            onChange={(e) => setDate(e.target.value)}
            type='date'
            className='form-control'
          />
        </div>
        {/* Password */}
        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>
        {/* confirm password */}
        <div className='mb-3'>
          <label htmlFor=''>Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>
        {/* Signup button */}
        <div>
          <button
            onClick={onRegister}
            className='btn btn-success registerbutton'
          >
            Sign Up
          </button>
        </div>
        <div className='link'>
          Already have an account? <Link to='/'>Sign In</Link>
        </div>

      </div>
    </div>
  )
}

export default Register
