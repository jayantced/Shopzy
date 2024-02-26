import { useEffect, useState } from "react";
import Section from "../components/Section";
import { fetchBestSalesProducts, fetchLatestProducts } from "../utils/http";

export default function Home() {
  // const [products, setProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  useEffect(() => {
    async function fetchedLatestProducts() {
      const fetchedLatestProducts = await fetchLatestProducts();

      setLatestProducts(fetchedLatestProducts);
    }

    fetchedLatestProducts();

    async function fetchedBestSalesProducts() {
      const fetchedLatestProducts = await fetchBestSalesProducts();

      setBestSalesProducts(fetchedLatestProducts);
    }

    fetchedBestSalesProducts();
  }, []);

  // console.log(products)
  return (
    <>
      <div className="hero"></div>
      <Section title="Latest Additions" productItems={latestProducts} />
      <Section title="Best Sales" productItems={bestSalesProducts} />
    </>
  );
}
