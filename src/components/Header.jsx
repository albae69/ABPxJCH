import { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Menu, Transition } from '@headlessui/react'
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/20/solid'

import { useAuth } from '../utils/useAuth'

const Header = () => {
  const cart = useSelector((state) => state.cartReducer.cart)

  // if current location is login page, remove login link
  let location = useLocation()
  let isLogin = location.pathname.includes('/login')
  let isLoggedIn = useAuth()

  const onLogout = async () => {
    await localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <header className='h-[80px] flex flex-row items-center justify-between sticky top-0 z-[99] backdrop-blur'>
      <Link to='/' reloadDocument>
        <h1 className='font-bold text-3xl'>ABP x JCH Store</h1>
      </Link>
      {!isLogin ? (
        isLoggedIn ? (
          <div className='flex items-center'>
            <Link to='/cart' className='mr-10'>
              <ShoppingCartIcon
                className='h-5 w-5 object-contain'
                aria-hidden='true'
              />
              <p className='absolute top-5 ml-7 text-sm'>
                {cart.length > 0 ? cart.length : null}
              </p>
            </Link>
            <Profile onLogout={onLogout} />
          </div>
        ) : (
          <Link
            to='/login'
            className='border px-10 py-1 rounded-md hover:underline text-base font-medium'>
            Login
          </Link>
        )
      ) : null}
    </header>
  )
}

export default Header

function Profile({ onLogout }) {
  return (
    <div>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button>
            <UserCircleIcon
              className='h-10 w-10 object-contain'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'>
          <Menu.Items className='absolute right-0 mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onLogout}
                    className={`${
                      active ? 'bg-gray-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
