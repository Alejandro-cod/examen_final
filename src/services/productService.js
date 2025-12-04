import axios from 'axios'

const api = axios.create({
  baseURL: 'https://691d0016d58e64bf0d34ab72.mockapi.io/api/v1',
  timeout: 10000
})

export default {
  async getAll() { return (await api.get('/products')).data },
  async create(product) { return (await api.post('/products', product)).data },
  async getById(id) { return (await api.get(`/products/${id}`)).data },
  async update(id, product) { return (await api.put(`/products/${id}`, product)).data },
  async remove(id) { return (await api.delete(`/products/${id}`)).data }
}
