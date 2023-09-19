const ProductItem = ({
  title,
  price,
  category,
  description,
  image,
  onClick,
}) => {
  return (
    <div
      className='w-[300px] rounded-xl border border-gray-200 shadow-lg p-4 mx-2 mb-1 scale-95 hover:scale-100 cursor-pointer'
      onClick={onClick}>
      {image ? (
        <img
          src={image}
          alt='product image'
          className='h-[200px] w-full object-contain mb-4 '
        />
      ) : (
        <div className='h-[200px] w-full bg-gray-200 rounded-md mb-2' />
      )}
      <h3 className='font-bold text-base'>{title || 'title'}</h3>
      <h3 className='font-semibold'>${price || 'price'}</h3>
      <p className='font-regular text-sm'>{category || 'category'}</p>
      <p className='font-regular text-sm '>
        {description.length > 100
          ? `${description.slice(0, 100)}...`
          : description || 'description'}
      </p>
    </div>
  )
}

export default ProductItem
