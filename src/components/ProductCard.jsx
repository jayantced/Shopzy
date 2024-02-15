import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductCard({ productItem }) {

  const navigate = useNavigate();
  const handelClick = () => {
    navigate(`/shop/${productItem.id}`);
  };

  const handelAdd = () => {
    //.....
  };

  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      <img src={productItem.image} />
      <div className="product-like">
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <div className="product-details">
        <h3 onClick={() => handelClick()}>{productItem.title}</h3>
      </div>
      <div className="price">
        <h4>${productItem.price}</h4>
        <button
          aria-label="Add"
          type="submit"
          className="add"
          onClick={() => handelAdd(productItem)}
        >
          <ion-icon name="add"></ion-icon>
          </button>
      </div>
    </Col>
  );
}
