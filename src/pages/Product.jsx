import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import { json, useLoaderData } from "react-router-dom";
import { fetchProducts } from "../hooks/useHttps";
import Section from "../components/Section";

export default function ProductDetailsPage() {
  const selectedProductData = useLoaderData();
  // const selectedProduct = selectedProductData;
  // console.log(selectedProductData.category);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchAvailableProducts() {
      try {
        const fetchedProducts = await fetchProducts();

        setProducts(fetchedProducts);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAvailableProducts();
  }, []);

  const [relatedProducts, setRelatedProducts] = useState([]);

  // console.log(relatedProducts)

  useEffect(() => {
    window.scrollTo(0, 0);

    const filteredProducts = products.filter(
      (product) =>
        product.category === selectedProductData.category &&
        product.id !== selectedProductData.id
    );

    setRelatedProducts(filteredProducts);
  }, [products, selectedProductData]);

  return (
    <>
      <ProductDetails selectedProduct={selectedProductData} />
      {relatedProducts && (
        <Section title="Related Products" productItems={relatedProducts} />
      )}
    </>
  );
}

export async function loader({ params }) {
  const productId = params.id;
  const response = await fetch(
    "https://fakestoreapi.com/products/" + productId
  );
  const resData = await response.json();

  if (!response.ok) {
    throw json({ message: "Could not find product." }, { status: 400 });
  } else {
    return resData;
  }
}
