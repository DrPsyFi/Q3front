import axios from 'axios'


const BASE_URL = 'http://localhost:5000'

export default function request(path, method = 'get', body = null) {
  let bearerToken = ''
  const token = localStorage.getItem('token')

  if(token){
    bearerToken = `Bearer ${token}`
  }
 ////////sending to BE Server
  return axios(`${BASE_URL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': bearerToken
    },
    data: body
  })
  .catch(function(error){
    if(error.response.status === 401){


    }
    return Promise.reject()
  })
}
