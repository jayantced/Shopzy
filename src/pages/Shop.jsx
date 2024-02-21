import { Col, Container, Row } from "react-bootstrap";
import Banner from "../components/Banner";
import FilterSelect from "../components/FilterSelect";
import { fetchProducts } from "../hooks/useHttps";
import { useEffect, useState } from "react";
import ShopList from "../components/ShopList";
import SearchBar from "../components/SearchBar";

export default function Shop() {
  
  const [filterList, setFilterList] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function fetchAvailableProducts() {
      try {
        const fetchedProducts = await fetchProducts();
        setFilterList(fetchedProducts);
        setAllProducts(fetchedProducts);
        setLoader(false);
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
    }

    fetchAvailableProducts();
  }, []);

  function handleSearch(keyword) {

    const filteredProducts = allProducts?.filter(item =>
      item.title.toLowerCase().includes(keyword?.toLowerCase())
    );
    setFilterList(filteredProducts);
  }
  

  return (
    loader ? 
    <>
      <h3>Loading ..... </h3>
    </> 
    : 
    <>
      <Banner title="product" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer mb-5">
          <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect setFilterList={setFilterList} />
            </Col>
            <Col md={8}>
              <SearchBar setFilterList={setFilterList} onSearch={handleSearch} />
            </Col>
          </Row>
        </Container>
        <Container>
          {filterList.length === 0 ? 
            <h1 className="not-found">No products found!</h1> 
            : 
            <ShopList productItems={filterList} />
          }
        </Container>
      </section>
    </>
  )
}
