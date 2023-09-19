import { get } from './api'

const getProduct = async () => {
  const response = await get('products')
  return response.data
}

const getSingleProduct = async (id) => {
  const response = await get(`products/${id}`)
  return response.data
}

const getCategory = async () => {
  const response = await get('products/categories')
  return response.data
}

const getProductByCategory = async (category) => {
  const response = await get(`products/category/${category}`)
  return response.data
}

export { getProduct, getCategory, getProductByCategory, getSingleProduct }
