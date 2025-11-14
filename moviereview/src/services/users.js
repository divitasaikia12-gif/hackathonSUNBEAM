import axios from 'axios'
import { config } from './config'

export async function register(first_name, last_name, email, pass, mobile, birth) {
  try {
    // url to send the request
    const url = `${config.server}/user/register`

    // create a body object
    const body = { first_name, last_name, email, pass, mobile,birth }

    // send POST request
    const response = await axios.post(url, body)

    // return response body
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}

export async function login(email, pass) {
  try {
    // create url
    const url = `${config.server}/user/login`

    // create body
    const body = { email, pass }

    // send the POST request
    const response = await axios.post(url, body)

    // return response body
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}
