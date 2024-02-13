import { Col } from "react-bootstrap";

export default function ProductCard({ ProductItem }) {
  const handelAdd = () => {
    //.....
  };
  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      <img src={ProductItem.image} />
      <div className="product-like">
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <div className="product-details">
        <div className="price">
          <h4>{ProductItem.title}</h4>
          <button
            aria-label="Add"
            type="submit"
            className="add"
            onClick={() => handelAdd(productItem)}
          >
            <ion-icon name="add"></ion-icon>
          </button>
        </div>
      </div>
    </Col>
  );
}
