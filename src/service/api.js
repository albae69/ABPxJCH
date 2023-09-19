import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 3000,
})

const get = (url, params) => {
  return instance.get(url, params)
}

const post = (url, data) => {
  return instance.post(url, data)
}

export { get, post }
