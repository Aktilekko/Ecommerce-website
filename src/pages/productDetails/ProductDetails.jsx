import React, { useState, useRef } from "react";
import "./productDetails.scss";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import CommonSection from "../../components/UI/CommonSection";
import Helmet from "../../components/helmet/Helmet";
import products from "../../assets/data/products";
import ProductList from "../../components/UI/ProductList";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const reviewName = useRef();
  const reviewMsg = useRef();
  const [rating, setRating] = useState(null);
  const dispatch = useDispatch();

  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    shortDesc,
    description,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    const reviewUserName = reviewName.current.value;
    const reviewUserMsg = reviewMsg.current.value;
  };

  const addToCart = () => {
    dispatch(
      cartAction.addItem({
        id: id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product added successfully!");
  };

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="p-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>

            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating">
                  <div>
                    <span>
                      <i class="ri-star-s-line"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-line"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-line"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-line"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-line"></i>
                    </span>
                  </div>
                  <p>
                    ( <span>{avgRating}</span> rating)
                  </p>
                </div>

                <div className=" product__info d-flex align-items-center gap-5">
                  <span className="product__price">${price}</span>
                  <span>Category: {category}</span>
                </div>
                <p className=" short__desc mt-2">{shortDesc}</p>

                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className="button button_1"
                  onClick={addToCart}
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" product__tab tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="product__review-wrapper">
                    <ul>
                      {reviews.map((item, index) => (
                        <li key={index}>
                          <h6>Jhon Doe</h6>
                          <span>{item.rating} ( rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="review__form">
                    <h4>Leave your experience</h4>
                    <form action="" onSubmit={submitHandler}>
                      <div className="review__form-group">
                        <input
                          type="text"
                          placeholder="Enter name"
                          ref={reviewName}
                        />
                      </div>
                      <div className="review__form-group">
                        <span onClick={() => setRating(1)}>
                          1<i class="ri-star-s-fill"></i>
                        </span>
                        <span>
                          2<i class="ri-star-s-fill"></i>
                        </span>
                        <span>
                          3<i class="ri-star-s-fill"></i>
                        </span>
                        <span>
                          4<i class="ri-star-s-fill"></i>
                        </span>
                        <span>
                          5<i class="ri-star-s-fill"></i>
                        </span>
                      </div>
                      <div className="review__form-group">
                        <textarea
                          type="text"
                          placeholder="Review message..."
                          rows={4}
                          ref={reviewMsg}
                        />
                      </div>

                      <button className="button button_1">Submit</button>
                    </form>
                  </div>
                </div>
              )}
            </Col>

            <Col className="mt-5" lg="12">
              <h2 className="related__title">You might also like</h2>
            </Col>

            <ProductList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
