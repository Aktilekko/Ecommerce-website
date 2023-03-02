import React from "react";
import "./cart.scss";
import Helmet from "../../components/helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import cartImg from "../../assets/images/dumbells-3.jpg";

const Cart = () => {
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              <table className="table bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delate</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <img src={cartImg} alt="" />
                    </td>
                    <td>Modern dumbells</td>
                    <td>$350</td>
                    <td>1</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </Col>

            <Col lg="3"></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
