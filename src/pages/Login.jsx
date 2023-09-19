import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Input from '../components/Input'
import Button from '../components/Button'
import { login } from '../service/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = async () => {
    try {
      let data = {
        username: username,
        password: password,
      }
      console.log('data to send', data)
      const response = await login(data)
      console.log('response onLogin', response)
      localStorage.setItem('token', response.token)
      navigate('/', { replace: true })
    } catch (error) {
      console.error('error while onLogin', error)
    }
  }

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token != null) {
      navigate('/', { replace: '/' })
    }
  }, [])

  return (
    <Layout>
      <section className='flex flex-1 items-center justify-center pt-10'>
        <div>
          <Input
            label='Username'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title='Login' onClick={onLogin} />
        </div>
      </section>
    </Layout>
  )
}

export default Login
