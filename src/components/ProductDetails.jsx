import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cart-slice";

export default function ProductDetails({selectedProduct}) {

  const dispatch = useDispatch();
  const {id, title, price, image} = selectedProduct 

  const [productCount, setProductCount] = useState(1)

  const handleQuantityChange = (e) => {
    if (e > 9) {
      setProductCount(9)
    } else if (e < 1) {
      setProductCount(1)
    } else setProductCount(e)
  }
    const handelAddItemToCart = () => {
      dispatch(addItemToCart({
        id,
        title,
        price,
        quantity: +productCount,
        image
      }))
      setProductCount(1)
    }
  return (
    // <h1>Single Product Details</h1>
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <img loading="lazy" src={selectedProduct.image} alt="" />
          </Col>
          <Col md={6}>
            <h2>{selectedProduct?.title}</h2>
            
            <div className="info">
              <span className="price">${selectedProduct?.price}</span>
              <span>category: {selectedProduct?.category}</span>
            </div>
            <p>{selectedProduct?.description}</p>
            <input
              className="qty-input"
              type="number"
              placeholder="Qty"
              min='0'
              max='9'
              value={productCount}
              onChange={(event) => handleQuantityChange(event.target.value)}
            />
            <button
              aria-label="Add"
              type="submit"
              className="add"
              onClick={() => handelAddItemToCart()}
            >
              Add To Cart
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
