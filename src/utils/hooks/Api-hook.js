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
        published: data.published,
        price: data.price,
        imageURL: data.image,
      },
    )
    return response
  } catch (error) {
    return error
  }
}
