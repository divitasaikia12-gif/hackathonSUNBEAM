import { ToastContainer } from 'react-toastify'
import './App.css'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

import { Navigate, Route, Routes } from 'react-router-dom'
import PropertyListing from './pages/PropertyListing/PropertyListing'
import PropertyDetails from './pages/PropertyDetails/PropertyDetails'
import AddProperty from './pages/AddProperty/AddProperty'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Bookings from './pages/Bookings/Bookings'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import AuthProvider from './providers/AuthProvider'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ThemeProvider from './providers/ThemeProvider'

function App() {
  return (
    <div>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route
              path='/'
              element={<Navigate to='/login' />}
            />
            <Route
              path='login'
              element={<Login />}
            />
            <Route
              path='register'
              element={<Register />}
            />

            <Route
              path='home'
              element={
                // <ProtectedRoute>
                  <Home />
                // </ProtectedRoute>
              }
            >
              <Route
                path='properties'
                element={<PropertyListing />}
              />
              <Route
                path='property-details'
                element={<PropertyDetails />}
              />
              <Route
                path='add-property'
                element={<AddProperty />}
              />
              <Route
                path='cart'
                element={<Cart />}
              />
              <Route
                path='about-us'
                element={<AboutUs />}
              />
              <Route
                path='contact-us'
                element={<ContactUs />}
              />
              <Route
                path='bookings'
                element={<Bookings />}
              />
            </Route>
          </Routes>
        </AuthProvider>
      </ThemeProvider>

      {/* used to show the toasts */}
      <ToastContainer />
    </div>
  )
}

export default App
