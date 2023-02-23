import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import { useSelector } from "react-redux";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  return (
    <header className="header" ref={headerRef}>
      <div className="navbar">
        <div className="container navbar__container">
          <div className="navbar__logo">
            <span>
              <i class="ri-shopping-bag-3-line"></i>
            </span>
            <div className="navbar__logo-title">
              <h1>
                e<span>Shop</span>
              </h1>
            </div>
          </div>

          <nav className="navbar__menu" ref={menuRef} onClick={menuToggle}>
            <ul className="navbar__menu-item">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "navbar__active" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </ul>
          </nav>

          <div className="navbar__icon">
            <span className="fav__icon">
              <i class="ri-heart-line"></i>
              <span className="badge">1</span>
            </span>
            <span className="cart__icon">
              <i class="ri-shopping-bag-2-line"></i>
              <span className="badge">{totalQuantity}</span>
            </span>
            <button className="navbar__toggle" onClick={menuToggle}>
              <span>
                <i class="ri-menu-3-line"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
