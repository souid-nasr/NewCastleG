import React, { useState, useEffect, useRef, useMemo } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";


const featuredProducts = [
  "/assets/ieasaw-background.jpg",
  "/assets/background-image.jpg",
  "/assets/image1.jpg",
];
let count = 0;
let slideInterval;
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="slider-img">
      <div className="aspect-img">
        <img src={featuredProducts[currentIndex]} alt="" />
      </div>

      <div className="content-slider">
        <div className="title-slider">
          <h1>CHOESE YOUR PLACE TO STUDY</h1>
          <p>
       
            With thousands of success stories from students all around the
             world, IEASAW are here for you, every step of the way.
          </p>
          <button className="btn-training">Free E-Consulting <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
        </div>
        
      </div>

      <div className="button-slider">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  );
}
