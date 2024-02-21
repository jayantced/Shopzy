import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ShopList = ({ productItems }) => {

//   useEffect(() => {
//     setfilteredList(productItems)
//   }, [productItems, setfilteredList]);

// setfilteredList(productItems)

  if (productItems.length === 0) {
    return <h1 className="not-found">Loading !!</h1>;
  }
  return (
    <Row className="justify-content-center">
      {productItems.map((productItem) => {
        return (
          <ProductCard
            key={productItem.id}
            title={null}
            productItem={productItem}
          />
        );
      })}
    </Row>
  );
};
export default ShopList;