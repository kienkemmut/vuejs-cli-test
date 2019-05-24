import axios from 'axios'
const customAxios = axios.create({
  baseURL: 'http://5bb2037177063c0014a7d199.mockapi.io/',
  withCredentials: true,
  mode: 'no-cors',
  crossdomain: true,
  headers: {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})

export default {
  customAxios
}
