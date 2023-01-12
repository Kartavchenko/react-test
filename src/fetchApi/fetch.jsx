import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/api/products";

export const getFetch = async (page) => {
  const result = await axios.get(`?per_page=5&page=${page}`);
  return result.data;
};

export const getProduct = async (productId) => {
  const result = await axios.get(`/${productId}`);
  return result.data;
};
