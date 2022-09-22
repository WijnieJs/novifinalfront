import axios from 'axios'
const GITHUB_URL = 'http://localhost:8080/api/public'

const product = axios.create({
  baseURL: GITHUB_URL,
})

export const fetchUsers = async () => {
  const response = await product.get(`/allProductsInShop`)

  return response.data
}
