import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'content-type': 'application/json'
  }
})

export default api