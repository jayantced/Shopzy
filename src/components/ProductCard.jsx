import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItemToCart } from "../store/cart-slice";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductCard({ productItem }) {

  const dispatch = useDispatch();

  const {id, title, price, image} = productItem;

  const handelAddItemToCart = () => {
    dispatch(
      addItemToCart({
        id,
        title,
        price,
        quantity: 1,
        image 
      })
    )
    // console.log(id, title, price);
  };

  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      <Link to={`/${productItem.id}`}>
      <img src={productItem.image} />
      </Link>
      {/* <div className="product-like">
        <ion-icon name="heart-outline"></ion-icon>
      </div> */}
      <div className="product-details">
      <Link to={`/${productItem.id}`}>
        <h3>{productItem.title}</h3>
        </Link>
      </div>
      <div className="price">
        <h4>${productItem.price}</h4>
        <button
          aria-label="Add"
          type="submit"
          className="add"
          onClick={() => handelAddItemToCart(productItem)}
        >
          <ion-icon name="add"></ion-icon>
          </button>
      </div>
      
    </Col>
  );
}