import React from 'react'
import Layout from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { removeProduct } from '../store/slice/cartSlice'

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  const onDelete = (id) => {
    dispatch(removeProduct(id))
    console.log('cart', cart)
  }

  return (
    <Layout>
      <div className='flex flex-1 items-center justify-center'>
        <div>
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onDelete={() => onDelete(item.id)}
              />
            ))
          ) : (
            <div className='flex flex-1 items-center justify-center'>
              <p className='mt-[200px]'>No Item in Cart</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Cart
