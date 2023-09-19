import { post } from './api'

const login = async (data) => {
  const response = await post('auth/login', data)
  return response.data
}

export { login }
