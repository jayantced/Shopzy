import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductCard({ productItem }) {

  // const navigate = useNavigate();

  // console.log(productItem.id);

  // const params = useParams();
  const handelClick = () => {
    // navigate(`/shop/${productItem.title}`);
  };

  const handelAdd = () => {
    //.....
  };

  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      <Link to={`/${productItem.id}`}>
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
      </Link>
    </Col>
  );
}