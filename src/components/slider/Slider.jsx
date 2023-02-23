import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./slider.scss";
import sliderData from "../../assets/data/sliderData";
import { NavLink } from "react-router-dom";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoSroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
  auto();

  useEffect(() => {
    return () => clearInterval(slideInterval);
  }, [slideInterval, autoSroll]);

  return (
    <div className="slider">
      <FaArrowLeft className="arrow prev" onClick={prevSlide} />
      <FaArrowRight className="arrow next" onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div
            key={index}
            className={index === currentSlide ? "slide current" : "slide"}
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide-img" />
                <div className="content">
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <NavLink to={"/shop"} className="slider__btn">
                    Shop now
                  </NavLink>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
