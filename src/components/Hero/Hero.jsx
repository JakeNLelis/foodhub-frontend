import React from "react";
import "./Hero.css";
import hero_img from "../../assets/pasta2.png";
import { FaShippingFast } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";

function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="hero-top">
          <div className="hero-left">
            <h1>Enjoy your Delicious Meal</h1>
            <h2>Discover Delicious and Healthy Meal that Nourishes You</h2>
            <p>
              Shop now! With FoodHub, your cravings will be satisfied right
              within your fingertips. We will deliver your nutricious food to
              your doorstep for free.
            </p>
            <button className="btn">Explore Our Menu</button>
          </div>
          <div className="hero-right">
            <img src={hero_img} alt="hero" className="hero-img" />
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-content">
            <div className="info-icon">
              <FaShippingFast className="icon" />
            </div>
            <div className="details">
              <h3>Free Shipping</h3>
              <p>Free shipping on order</p>
            </div>
          </div>
          <div className="hero-content">
            <div className="info-icon">
              <FiSend className="icon" />
            </div>
            <div className="details">
              <h3>Worldwide Delivery</h3>
              <p>We deliver to all country</p>
            </div>
          </div>
          <div className="hero-content">
            <div className="info-icon">
              <BiSupport className="icon" />
            </div>
            <div className="details">
              <h3>24/7 Support</h3>
              <p>Full support on process</p>
            </div>
          </div>
          <div className="hero-content">
            <div className="info-icon">
              <MdPayment className="icon" />
            </div>
            <div className="details">
              <h3>Secure Payment</h3>
              <p>Your payment is secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
