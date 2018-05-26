import axios from 'axios'
//  we are creating an api that will point to the backend api
//  this basically connects our front end and backend
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}
