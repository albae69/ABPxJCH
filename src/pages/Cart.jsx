import { useEffect } from 'react'
import Layout from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { removeProduct } from '../store/slice/cartSlice'
import { useAuth } from '../utils/useAuth'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const OrderSummaryItem = ({ title = 'title', value = 'value' }) => {
  return (
    <div className='flex flex-row items-center justify-between'>
      <p className='text-base'>{title}</p>
      <p className='text-lg font-semibold'>${value}</p>
    </div>
  )
}

const Cart = () => {
  // TODO: get cart from api then persist the data
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cartReducer.cart)
  const dispatch = useDispatch()

  const SUBTOTAL = cart.reduce((a, b) => a + b.price, 0)
  const ESTIMATED_TAX = (SUBTOTAL * 0.1).toFixed(2)
  const ESTIMATED_SHIPPING = (SUBTOTAL * 0.05).toFixed(2)
  const TOTAL =
    SUBTOTAL + parseFloat(ESTIMATED_TAX) + parseFloat(ESTIMATED_SHIPPING)

  const onDelete = (id) => {
    dispatch(removeProduct(id))
  }

  let isLogged = useAuth()

  useEffect(() => {
    if (!isLogged) {
      navigate('/', { replace: '/' })
      toast.error('Unauthorized')
    }
  }, [])

  return (
    <Layout>
      {cart.length == 0 ? (
        <div className='flex flex-1 items-center justify-center'>
          <p className='mt-[200px]'>No Item in Cart</p>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 h-[500px]'>
          {/* Left */}

          <div className='grid md:overflow-auto'>
            {cart.length > 0
              ? cart.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onDelete={() => onDelete(item.id)}
                  />
                ))
              : null}
          </div>
          {/* Left */}

          {/* Right */}
          <div className='grid border rounded-md shadow-sm py-[54px] px-[64px]'>
            <h1 className='font-bold text-2xl'>Order Summary</h1>
            <OrderSummaryItem title='Subtotal' value={SUBTOTAL} />
            <OrderSummaryItem title='Estimated Tax' value={ESTIMATED_TAX} />
            <OrderSummaryItem
              title='Estimated Shipping'
              value={ESTIMATED_SHIPPING}
            />
            <OrderSummaryItem title='Total' value={TOTAL} />

            <button className='h-[48px] w-full bg-black text-white rounded-md mt-[20px]'>
              Checkout
            </button>
          </div>
          {/* Right */}
        </div>
      )}
    </Layout>
  )
}

export default Cart
