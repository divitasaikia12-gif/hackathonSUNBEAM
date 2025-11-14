import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TablePropertiesListing from '../../components/TablePropertiesListing/TablePropertiesListing'
import { removeFromCart, emptyCart } from '../../features/cartSlice'
import './SharedReview.css'
import { bookProperties } from '../../services/reviews'
import { toast } from 'react-toastify'

function Cart() {
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  // get all the properties stored in cart slice
  const properties = useSelector((store) => store.cart.properties)

  // get dispatch function reference
  const dispatch = useDispatch()

  const onDeletePropertyFromCart = (property) => {
    dispatch(removeFromCart(property))
  }

  const onBookProperties = async () => {
    // at the moment, we are implementing the booking feature only
    // for the first property
    // note: please add the feature to book all the properties of the cart
    const property = properties[0]

    const response = await bookProperties(
      property['id'],
      fromDate,
      toDate,
      property['rent']
    )
    if (response['status'] == 'success') {
      toast.success('successfully booked the properties')

      // empty the cart
      dispatch(emptyCart())
    } else {
      toast.error(response['error'])
    }
  }

  return (
    <div className='container'>
      <h2 className='page-header'>Cart</h2>

      <div className='row'>
        <div className='col-9'>
          {properties.length > 0 && (
            <TablePropertiesListing
              properties={properties}
              onDeleteProperty={onDeletePropertyFromCart}
            />
          )}
          {properties.length == 0 && (
            <h3 className='page-header'>
              Your cart is empty. Please add some properties to your cart.
            </h3>
          )}
        </div>

        {properties.length > 0 && (
          <div className='col-3'>
            <div className='booking-section'>
              <div className='mb-3'>
                <label htmlFor=''>Check in Date</label>
                <input
                  onChange={(e) => setFromDate(e.target.value)}
                  type='date'
                  className='form-control'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor=''>Check out Date</label>
                <input
                  onChange={(e) => setToDate(e.target.value)}
                  type='date'
                  className='form-control'
                />
              </div>

              <div className='mb-3'>
                <button
                  onClick={onBookProperties}
                  className='btn btn-success'
                >
                  Book Properties
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
