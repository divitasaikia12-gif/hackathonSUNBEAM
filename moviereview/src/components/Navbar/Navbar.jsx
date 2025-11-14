import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider'
import { useSelector } from 'react-redux'

function Navbar() {
  // get the reference of navigate function
  const navigate = useNavigate()

  // get setUser from AuthContext
  const { setUser } = useAuth()

  // get the properties from cart
  const properties = useSelector((store) => store.cart.properties)

  const onLogout = () => {
    // remove all the cached items
    localStorage.removeItem('token')
    localStorage.removeItem('firstName')
    localStorage.removeItem('lastName')

    // set the user to null
    setUser(null)

    // redirect to Login page
    navigate('/login')
  }

  return (
    <nav
      className='navbar navbar-expand-lg bg-body-tertiary '
      data-bs-theme='dark'
    >
      <div className='container-fluid '>
        <Link
          className='navbar-brand'
          to='/home/properties'
        >
          Movie Reviews
        </Link>
{/* Left corner */}
        <div
          className='collapse navbar-collapse'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home/movies'
              >
                All Movies
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home/myreview'
              >
                My Reviews
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home/sharedwithme'
              >
                Shared With Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home/allreviews'
              >
                All Reviews
              </Link>
            </li>
            </ul>

            
        </div>
{/* Right corner */}
        <div className='collapse navbar-collapse rightList'
          id='navbarNav'><ul className='navbar-nav '>
           
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home/about-us'
              >
                Edit Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home/contact-us'
              >
                Change Password
              </Link>
            </li>
            <li className='nav-item '>
              <button
                onClick={onLogout}
                className='nav-link logout'
                aria-current='page'
              >
                Logout
              </button>
            </li>
          </ul></div>
      </div>
    </nav>
  )
}

export default Navbar
