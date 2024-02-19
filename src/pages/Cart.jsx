import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/cart-slice";

export default function Cart() {
  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.cart.items);

  const totalPrice = cartList?.reduce(
    ((price, item) => price + item.quantity * item.price),
    0
  );

  // console.log(cartList);

  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {cartList.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}
            {cartList.map((item) => {
              const productQty = item.price * item.quantity;
              return (
                <div className="cart-list" key={item.id}>
                  <Row>
                    <Col className="image-holder" sm={4} md={3}>
                      <img src={item.image} alt="" />
                    </Col>
                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-content-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>{item.name}</h3>
                          <h4>
                            ${item.price.toFixed(2)} * {item.quantity}
                            <span>${productQty.toFixed(2)}</span>
                          </h4>
                        </Col>
                        <Col xs={12} sm={3} className="cartControl">
                          <button
                            className="incCart"
                            onClick={() =>
                              dispatch(
                                addItemToCart({
                                  id: item.id,
                                  quantity: 1,
                                  price: item.price,
                                })
                              )
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1"
                              ></path>
                            </svg>
                          </button>
                          <button
                            className="desCart"
                            onClick={() =>
                              dispatch(removeItemFromCart(item.id))
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <button
                      className="delete"
                      //   onClick={() => dispatch(deleteItemFromCart())}
                    >
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </Row>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            <div className="cart-total">
              <h2>Cart Summary</h2>
              <div className=" d_flex">
                <h4>Total Price :</h4>
                <h3>${totalPrice.toFixed(2)}</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
