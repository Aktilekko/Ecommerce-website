import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./productCart.scss";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/slices/cartSlice";
import { toast } from "react-toastify";

const ProductCart = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartAction.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("Product added successfully!");
  };

  return (
    <Col className="mb-5" lg="3" md="4">
      <div className="product">
        <div className="product__item">
          <div className="product__img">
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={item.imgUrl}
              alt="cartImg"
            />
          </div>

          <div className="product__info">
            <h3 className="product__name">
              <Link to={`/shop/${item.id}`}>{item.productName}</Link>
            </h3>
            <span className="text-center d-block">{item.category}</span>
          </div>

          <div className="product__card-bottom">
            <span className="product__card-price ">${item.price}</span>
            <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
              <i class="ri-add-line"></i>
            </motion.span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCart;
