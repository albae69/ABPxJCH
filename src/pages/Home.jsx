import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import {
  getCategory,
  getProduct,
  getProductByCategory,
} from '../service/product'
import ProductItem from '../components/ProductItem'
import { useNavigate } from 'react-router-dom'
import ProductItemSkeleton from '../components/ProductItemSkeleton'

const Home = () => {
  const navigate = useNavigate()

  const [listProduct, setLisProduct] = useState([])
  const [listCategory, setListCategory] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const init = async () => {
    setLoading(true)
    setError(false)

    try {
      let product = await getProduct()
      setLisProduct(product)
      let category = await getCategory()
      setListCategory(category)
      setLoading(false)
    } catch (error) {
      console.log('error while init')
      setLoading(false)
      setError(true)
    }
  }

  const getProductCategory = async (category) => {
    setLoading(true)
    try {
      const response = await getProductByCategory(category)
      console.log('response getProductCategory', response)
      setLisProduct(response)
      setLoading(false)
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
      console.log('error while getProductCategory')
    }
  }

  useEffect(() => {
    init()
  }, [])

  if (error) {
    return (
      <Layout>
        <section className='flex flex-1 items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-red-500 font-bold text-5xl pt-[100px] mb-10'>
              Something Error!
            </h1>
            <p className='hover:underline hover:cursor-pointer' onClick={init}>
              Try again
            </p>
          </div>
        </section>
      </Layout>
    )
  }

  return (
    <Layout>
      {/* Categories */}
      <section className='flex justify-center items-center h-4 mb-16'>
        <div className='flex'>
          {listCategory.length > 0 &&
            listCategory.map((category) => (
              <p
                key={category}
                className='mx-3 cursor-pointer hover:underline text-sm md:text-base capitalize'
                onClick={() => getProductCategory(category)}>
                {category.replace("'s clothing", '')}
              </p>
            ))}
        </div>
      </section>
      {/* Categories */}

      {/* Product */}
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto'>
        {loading ? (
          <>
            <ProductItemSkeleton />
            <ProductItemSkeleton />
            <ProductItemSkeleton />
            <ProductItemSkeleton />
          </>
        ) : (
          listProduct.length > 0 &&
          listProduct.map((product) => (
            <ProductItem
              key={product.id}
              {...product}
              onClick={() => navigate(`/product/${product.id}`)}
            />
          ))
        )}
      </section>
      {/* Product */}
    </Layout>
  )
}

export default Home
