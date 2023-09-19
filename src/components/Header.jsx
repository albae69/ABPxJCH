import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../utils/useAuth'
import { useSelector } from 'react-redux'

const Header = () => {
  const cart = useSelector((state) => state.cart.cart)
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
          <div className='flex items-center'>
            <Link to='/cart' className='mr-10'>
              Cart
              <p className='absolute top-5 ml-10'>
                {cart.length > 0 ? cart.length : null}
              </p>
            </Link>
            <p
              className='border px-6 py-1 rounded-md hover:underline'
              onClick={onLogout}>
              Logout
            </p>
          </div>
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
