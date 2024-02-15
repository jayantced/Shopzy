import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

export default function Section({ title, productItems }) {

  console.log(productItems);
  return (
    <section>
      <Container>
        <div className="heading">
          <h1>{title}</h1>
        </div>
        <Row className="justify-content-center">
          {productItems.map((productItem) => (
            <ProductCard key={productItem.id} productItem={productItem} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
