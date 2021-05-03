import api from './api-helper';

export const getAllCategories = async () => {
  const resp = await api.get('/categories')
  return resp.data;
}

export const addCategory = async (categoryName ) => {
  const resp = await api.post(`/categories/`, { category: categoryName })
  return resp.data;
}