import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../utils/useAuth'

const Header = () => {
  // if current location is login page, remove login link
  let location = useLocation()
  let isLogin = location.pathname.includes('/login')
  let isLoggedIn = useAuth()

  const onLogout = async () => {
    await localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <header className='h-[80px] flex flex-row items-center justify-between'>
      <Link to='/'>
        <h1 className='font-bold text-3xl'>Fakestore</h1>
      </Link>
      {!isLogin ? (
        isLoggedIn ? (
          <p
            className='border px-6 py-1 rounded-md hover:underline'
            onClick={onLogout}>
            Logout
          </p>
        ) : (
          <Link
            to='/login'
            className='border px-6 py-1 rounded-md hover:underline'>
            Login
          </Link>
        )
      ) : null}
    </header>
  )
}

export default Header
