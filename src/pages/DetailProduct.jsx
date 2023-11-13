import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import DetailProductSkeleton from '../components/DetailProductSkeleton'
import { useEffect, useState } from 'react'
import { getSingleProduct } from '../service/product'
import { useAuth } from '../utils/useAuth'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/slice/cartSlice'
import toast from 'react-hot-toast'

const DetailProduct = () => {
  const navigate = useNavigate()
  let isLoggedIn = useAuth()
  let { id } = useParams()
  const dispatch = useDispatch()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const init = async () => {
    setLoading(true)
    try {
      const response = await getSingleProduct(id)
      console.log('response init', response)
      setProduct(response)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log('error while init', error)
    }
  }

  const handleClick = () => {
    if (isLoggedIn) {
      // kalau sudah login, masukkan produk ke cart
      dispatch(addProduct(product))
    } else {
      // kalau belum, login dahulu
      navigate('/login')
      toast.error('Unauthorized, please login first!')
    }
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <Layout>
      <section className='grid grid-cols-1 gap-4 md:grid-cols-2  md:pt-[100px]'>
        {/* Left */}
        <div className='flex items-center justify-center mb-[100px]'>
          {loading ? (
            <div className='animate-pulse h-[350px] w-[400px] bg-gray-100 rounded-md border' />
          ) : (
            <img
              src={product?.image}
              className='h-[350px] w-[400px] object-contain'
              alt='product image'
            />
          )}
        </div>
        {/* Left */}

        {/* Right */}
        {loading ? (
          <DetailProductSkeleton />
        ) : (
          <div className='mb-10'>
            <h3 className='font-bold text-2xl'>{product?.title}</h3>
            <h3 className='font-semibold text-xl'>${product?.price}</h3>
            <p className='font-regular text-md text-gray-500 mb-2'>
              {product?.category}
            </p>
            <p className='font-regular text-sm text-gray-500 mb-2'>
              {product?.description}
            </p>
            <button
              className='h-[48px] w-full bg-black text-white rounded-md mt-[20px]'
              onClick={handleClick}>
              Add To Cart
            </button>
          </div>
        )}
        {/* Right */}
      </section>
    </Layout>
  )
}

export default DetailProduct
