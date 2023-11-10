import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { login } from '../service/auth'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/useAuth'
import toast from 'react-hot-toast'

const Login = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('mor_2314')
  const [password, setPassword] = useState('83r5^_')
  const [loading, setLoading] = useState(false)

  const onLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      let data = {
        username: username,
        password: password,
      }
      const response = await login(data)
      localStorage.setItem('token', response.token)
      toast.success('Login successfully')
      navigate('/', { replace: true })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error('error while onLogin', error)
      toast.error(error?.response?.data)
    }
  }

  let isLogged = useAuth()

  useEffect(() => {
    if (isLogged) {
      navigate('/', { replace: '/' })
    }
  }, [])

  return (
    <Layout>
      <section className='flex flex-1 items-center justify-center pt-10'>
        <form
          onSubmit={onLogin}
          className='rounded-lg border shadow-sm w-[500px] p-10'>
          <h1 className='font-bold text-2xl text-black mb-4'>Login</h1>
          <p className='mb-2'>Username</p>
          <input
            label='username'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='h-10 border border-gray-500 rounded-md  w-full px-2 mb-4 focus:outline-none'
            required
          />
          <p className='mb-2'>Password</p>
          <input
            label='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='h-10 border border-gray-500 rounded-md  w-full px-2 mb-4 focus:outline-none'
            required
          />
          <button
            disabled={loading}
            className='h-[48px] w-full bg-black text-white rounded-md mt-[20px]'
            type='submit'>
            {loading ? 'loading...' : 'Login'}
          </button>
        </form>
      </section>
    </Layout>
  )
}

export default Login
