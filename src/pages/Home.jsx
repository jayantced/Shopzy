import { useEffect, useState } from "react";
import Section from "../components/Section";

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

  // console.log(products)
  return (
    <>
      <Section title="Big Discount" bgColor="#f6f9fc" productItems={products} />
      <Section
        title="New Arrivals"
        bgColor="#fff"
        productItems={products}
      />
    </>
  );
}
