import { useState } from "react";
import ProductDetails from "../components/ProductDetails";
import { json, useLoaderData } from "react-router-dom";

export default function ProductDetailsPage() {

  const [selectedProduct, setSelectedProduct] = useState();

  const productData = useLoaderData();
  return (
    <>
    {/* <h1>Product details container</h1> */}
    <ProductDetails selectedProduct={productData} />
    </>
  )
}

export async function loader({params}) {

  const productId = params.id
  const response = await fetch('https://fakestoreapi.com/products/' + productId);

  if (!response.ok) {
    throw json({message: 'Could not find product.'}, {status: 400})
  } else {
    return response;
  }

}