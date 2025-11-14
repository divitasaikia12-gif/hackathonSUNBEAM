import axios from 'axios'
import { config } from './config'

export async function bookProperties(propertyId, fromDate, toDate, total) {
  try {
    // url to send the request
    const url = `${config.server}/booking`

    // create a body object
    const body = { propertyId, fromDate, toDate, total }

    // send POST request
    const response = await axios.post(url, body, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })

    // return response body
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}

export async function getMyBookings() {
  try {
    // url to send the request
    const url = `${config.server}/booking`

    // send POST request
    const response = await axios.get(url, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })

    // return response body
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}
