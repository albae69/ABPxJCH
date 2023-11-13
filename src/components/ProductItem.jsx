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
      className='w-full  rounded-xl border border-gray-200 shadow-lg cursor-pointer p-4 hover:-translate-y-1'
      onClick={onClick}>
      {image ? (
        <img
          src={image}
          alt='product image'
          className='h-[250px] w-full object-contain mb-4 '
        />
      ) : (
        <div className='h-[250px] w-full bg-gray-200 rounded-md mb-2' />
      )}
      <h3 className='font-semibold text-base line-clamp-1'>
        {title || 'title'}
      </h3>
      <h3 className='font-bold'>${price || 'price'}</h3>
      <p className='font-bold text-sm capitalize mb-1'>
        {category || 'category'}
      </p>
      <p className='font-regular text-sm line-clamp-2'>{description}</p>
    </div>
  )
}

export default ProductItem
