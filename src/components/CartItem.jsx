import React from 'react'

const CartItem = ({ title, price, category, description, image, onDelete }) => {
  return (
    <div className='flex flex-row items-center  min-h-[150px] max-w-lg border rounded-md p-4 m-4'>
      {/* Left */}
      <img
        src={image}
        className='h-[100px] w-[100px] object-contain'
        alt='product image'
      />
      {/* Left */}
      {/* Right */}{' '}
      <div className=' p-4'>
        <h3 className='font-bold text-sm'>
          {title.length > 50 ? title.slice(0, 50) : title}
        </h3>
        <h3 className='font-semibold text-sm mb-4'>${price}</h3>
        <button
          className=' bg-black text-white rounded-md  px-4 py-2'
          onClick={onDelete}>
          Delete
        </button>
      </div>
      {/* Right */}
    </div>
  )
}

export default CartItem
