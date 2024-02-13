import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  // const response = fetch("https://fakestoreapi.com/products");
  // console.log(response);
  // const resData = response.json();
  // console.log(resData);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      // console.log(response);
      const resData = await response.json();
      // console.log(resData);
      setProducts(resData);
    }
    fetchProducts();
  }, []);

  console.log(products)
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} id={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
