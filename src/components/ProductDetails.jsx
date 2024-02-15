import { Col, Container, Row } from "react-bootstrap";

export default function ProductDetails({selectedProduct}) {

    // const handelAdd = () => {
    //     //.....
    // }
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
            //   value={quantity}
            //   onChange={handleQuantityChange}
            />
            <button
              aria-label="Add"
              type="submit"
              className="add"
            //   onClick={() => handelAdd(selectedProduct, quantity)}
            >
              Add To Cart
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
