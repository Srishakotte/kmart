import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useState } from "react";
import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import Banner from '../components/Banner/Banner'

const Shop = () => {
  const [filterList, setFilterList] = useState(
    products.filter((item) => item.category === "sofa")
  );
  useWindowScrollToTop();

  return (
    <Fragment class='container'>
      <Banner title="Our Products" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={8}>
              <SearchBar setFilterList={setFilterList} />
            </Col>
          </Row>
        </Container>
        <Container>
          <ShopList productItems={filterList} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Shop;
