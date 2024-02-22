// export async function fetchProducts() {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const resData = await response.json();

//   // console.log(resData)

//   if (!response.ok) {
//     throw new Error('Failed to Fetch Product Data');
//   }
//   return resData;
// }



import axios from 'axios';

export function fetchProducts() {
  return axios.get("https://fakestoreapi.com/products")
    .then(response => response.data)
    .catch(error => {
      throw new Error('Failed to Fetch Product Data');
    });
}