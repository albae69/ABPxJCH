import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import { getSingleProduct } from '../service/product'
import { useAuth } from '../utils/useAuth'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/slice/cartSlice'

const DetailProduct = () => {
  const navigate = useNavigate()
  let isLoggedIn = useAuth()
  let { id } = useParams()
  const dispatch = useDispatch()

  console.log('isLoggedIn', isLoggedIn)

  const [product, setProduct] = useState(null)

  const init = async () => {
    try {
      const response = await getSingleProduct(id)
      console.log('response init', response)
      setProduct(response)
    } catch (error) {
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
    }
  }

  useEffect(() => {
    init()
  }, [])

  return product != null ? (
    <Layout>
      <section className='flex flex-row items-center'>
        {/* Left */}
        <img
          src={product?.image}
          className='h-[500px] w-[500px] object-contain'
          alt='product image'
        />
        {/* Left */}

        {/* Right */}
        <div className='ml-10'>
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
        {/* Right */}
      </section>
    </Layout>
  ) : null
}

export default DetailProduct
