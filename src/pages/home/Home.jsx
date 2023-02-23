import React, { useState, useEffect } from "react";
import Slider from "../../components/slider/Slider";
import "./home.scss";
import { Container, Row, Col } from "reactstrap";
import ProductList from "../../components/UI/ProductList";
import Helmet from "../../components/helmet/Helmet";
import products from "../../assets/data/products";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  const [sportProducts, setSportProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredNewArrivalProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredSportProducts = products.filter(
      (item) => item.category === "fitness"
    );
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setNewArrivalProducts(filteredNewArrivalProducts);
    setSportProducts(filteredSportProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <div>
        <Slider />
      </div>

      <section className="trending__products">
        <Container>
          <Row>
            <Col className="pb-5 text-center" lg="12">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col className="pb-5 text-center" lg="12">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col className="pb-5 text-center" lg="12">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList data={newArrivalProducts} />
          </Row>
        </Container>
      </section>

      <section className="sport__products">
        <Container>
          <Row>
            <Col className="pb-5 text-center" lg="12">
              <h2 className="section__title">Sport products</h2>
            </Col>
            <ProductList data={sportProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
