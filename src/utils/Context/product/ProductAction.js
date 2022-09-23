import axios from 'axios'
const GITHUB_URL = 'http://localhost:8080/api/public'

const product = axios.create({
  baseURL: GITHUB_URL,
})

export const fetchUsers = async () => {
  const response = await product.get(`/allProductsInShop`)

  return response.data
}

// New product
export const addProduct = async (data) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/api/public/newproduct',
      {
        title: data.title,
        description: data.description,
        price: data.price,
        publised: data.publised,
      },
    )
    return response.data
  } catch (error) {}
}
