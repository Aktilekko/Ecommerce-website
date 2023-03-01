import React, { useState } from "react";
import "./shop.scss";
import CommonSection from "../../components/UI/CommonSection";
import Helmet from "../../components/helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import ProductList from "../../components/UI/ProductList";
import products from "../../assets/data/products";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "fitness") {
      const filteredProducts = products.filter(
        (item) => item.category === "fitness"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products " />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div className="filter__widget-wrapper">
                <div className="filter__widget">
                  <select onChange={handleFilter}>
                    <option>Filter by category</option>
                    <option value="chair">Chair</option>
                    <option value="mobile">Mobile</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                    <option value="fitness">Fitness</option>
                  </select>
                </div>

                <div className="filter__widget text-end">
                  <select name="" id="">
                    <option>Sort by</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </div>
            </Col>

            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-3">No products are found!</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
