import { useEffect, useState } from "react";
import Section from "../components/Section";
import { fetchProducts } from "../hooks/useHttps";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function fetchAvailableProducts() {

      const fetchedProducts = await fetchProducts();

      setProducts(fetchedProducts);
    }
    
    fetchAvailableProducts();

  }, []);

  // console.log(products)
  return (
    <>
      <Section title="Big Discount" productItems={products} />
      <Section
        title="New Arrivals"
        productItems={products}
      />
    </>
  );
}
