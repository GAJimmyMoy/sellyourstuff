import api from './api-helper';

export const getAllCategories = async () => {
  const resp = await api.get('/categories')
  return resp.data;
}

export const addCategory = async (itemId, categoryId ) => {
  const resp = await api.get(`/items/${itemId}/categories/${categoryId}`)
  return resp.data;
}