import { Col, Container, Row } from "react-bootstrap";
import Banner from "../components/Banner";
import FilterSelect from "../components/FilterSelect";
import { fetchProducts } from "../hooks/useHttps";
import { useEffect, useState } from "react";
import ShopList from "../components/ShopList";

export default function Shop() {
  
  const [filterList, setFilterList] = useState([]);
  // console.log(filterList)

  useEffect(() => {
    async function fetchAvailableProducts() {
      try {
        const fetchedProducts = await fetchProducts();

      setFilterList(fetchedProducts)
        
      } catch (error) {
        console.log(error);
      }
    }

    fetchAvailableProducts();
  }, []);
  
  return (
    <>
      <Banner title="product" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect setFilterList={setFilterList} />
            </Col>
            <Col md={8}>
              {/* <SearchBar setFilterList={setFilterList} /> */}
            </Col>
          </Row>
        </Container>
        <Container>
          {!filterList && <h1 className="not-found">Loading !!</h1>}
          {filterList && <ShopList productItems={filterList} />}
        </Container>
      </section>
    </>
  )
}