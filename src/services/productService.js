import axios from 'axios'

const BASE_URL = 'https://691d0016d58e64bf0d34ab72.mockapi.io/api/v1'
const RESOURCE = `${BASE_URL}/products`

export default {
  getAllProducts() {
    return axios.get(RESOURCE)
  },

  getProductById(id) {
    return axios.get(`${RESOURCE}/${id}`)
  },

  createProduct(data) {
    return axios.post(RESOURCE, data)
  },

  updateProduct(id, data) {
    return axios.put(`${RESOURCE}/${id}`, data)
  },

  deleteProduct(id) {
    return axios.delete(`${RESOURCE}/${id}`)
  }
}