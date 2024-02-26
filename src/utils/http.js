import axios from 'axios';

export async function fetchProducts() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    throw new Error('Failed to Fetch Product Data');
  }
}

export async function fetchLatestProducts() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products?sort=asc&limit=6");
    return response.data;
  } catch (error) {
    throw new Error('Failed to Fetch Product Data');
  }
}

export async function fetchBestSalesProducts() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products?sort=desc&limit=6");
    return response.data;
  } catch (error) {
    throw new Error('Failed to Fetch Product Data');
  }
}