const ProductItemSkeleton = () => {
  return (
    <div className='animate-pulse w-full  rounded-xl border border-gray-200 shadow-lg  cursor-pointer p-4'>
      <div className='h-[250px] w-full bg-gray-100 rounded-md mb-2' />
      <div className='w-full'>
        <div className='h-5 w-full bg-gray-100 rounded-md mb-1' />
        <div className='h-3 w-full bg-gray-100 rounded-md mb-1' />
        <div className='h-3 w-full bg-gray-100 rounded-md mb-1' />
      </div>
    </div>
  )
}

export default ProductItemSkeleton
