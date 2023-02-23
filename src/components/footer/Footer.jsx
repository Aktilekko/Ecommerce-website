import React from "react";
import "./footer.scss";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="navbar__logo footer__logo">
              <div className="navbar__logo-title">
                <h1>
                  e<span>Shop</span>
                </h1>
              </div>
            </div>
            <p className=" footer__text pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              earum praesentium delectus in. Molestias doloribus veniam quos
              mollitia qui dolorem.
            </p>
          </Col>

          <Col lg="3">
            <div className="footer__links">
              <h4 className="footer__links-title pb-3">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2">
            <div className="footer__links">
              <h4 className="footer__links-title pb-3">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3">
            <div className="footer__links">
              <h4 className="footer__links-title pb-3">Contacts</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 ">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>Kyrgyzstan, Bishkek, Baisuu-19</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+996559507040</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>atillaxxx@inbox.ru</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by Akti Abraham
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
