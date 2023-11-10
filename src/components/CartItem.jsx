const CartItem = ({ title, price, category, description, image, onDelete }) => {
  return (
    <div className='flex flex-row items-center justify-between  w-full  border-b  p-4 '>
      <div className='p-4 flex items-center justify-center'>
        <img
          src={image}
          className='h-[100px] w-[100px] object-contain'
          alt='product image'
        />
        <div className='ml-4'>
          <h1 className='font-bold text-base line-clamp-1'>{title}</h1>
          <h3 className='font-semibold text-md'>${price}</h3>
        </div>
      </div>
      <button
        className=' bg-black text-white rounded-md  px-4 py-2'
        onClick={onDelete}>
        Delete
      </button>
    </div>
  )
}

export default CartItem
