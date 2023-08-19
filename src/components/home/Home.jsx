import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import "../extrafeautures/Countdown";
import { useSelector } from "react-redux";

//different types of product
import profile from "../../assets/p7.jpeg";
import profile1 from "../../assets/p4.jpeg";
import profile2 from "../../assets/p5.jpeg";

import product10 from "../../assets/p9.jpeg";
import product11 from "../../assets/p13.jpeg";
import product12 from "../../assets/p18.jpeg";
import product13 from "../../assets/p14.jpeg";
import product14 from "../../assets/p19.jpeg";
import product15 from "../../assets/p12.jpeg";

//icons services provide
import icon1 from "../../assets/icon2.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon2.png";
import icon4 from "../../assets/icon2.png";
import icon5 from "../../assets/icon2.png";
import icon6 from "../../assets/icon2.png";
import icon7 from "../../assets/design1.png";
import icon8 from "../../assets/price.png";
import icon9 from "../../assets/quality.png";
import icon10 from "../../assets/large.png";
import icon11 from "../../assets/easy.png";
import icon12 from "../../assets/fast.png";
import CountdownTimer from "../extrafeautures/Countdown";
import Spinner from "../spinner/Spinner";
import Layout from "../../shared/Layout";

const Home = () => {
  const { loading, error } = useSelector((state) => state.auth);

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <Layout>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className={`App ${theme}`}>
          <header className="App-header">
            <h1 className="welcome">Welcome to T-Shirt Factory!</h1>
            <p className="welcome1">
              Customize and order your perfect t-shirt online.
            </p>
            <p className="welcome1">
              <CountdownTimer />
            </p>
          </header>
          <section className="product-section">
            <h2>Our Products</h2>
            <div className="service-container">
              <div className="product-item">
                <img className="images1" src={profile} alt="T-Shirt 1" />
                <h3>T-Shirt 1</h3>
                <p>High-quality t-shirt with various color options.</p>
                <a className="cta-button" href="#customize">
                  Customize Now
                </a>
              </div>
              <div className="product-item">
                <img src={profile1} alt="T-Shirt 2" />
                <h3>T-Shirt 2</h3>
                <p>Soft and comfortable t-shirt with customizable.</p>
                <a className="cta-button" href="#customize">
                  Customize Now
                </a>
              </div>
              <div className="product-item">
                <img src={profile2} alt="T-Shirt 3" />
                <h3>T-Shirt 3</h3>
                <p>Classic t-shirt with various size options.</p>
                <a className="cta-button" href="#customize">
                  Customize Now
                </a>
              </div>
              <div className="product-item">
                <img src={product10} alt="T-Shirt 1" />
                <h3>T-Shirt 1</h3>
                <p>High-quality t-shirt with various color options.</p>
                <a className="cta-button" href="#customize">
                  Customize Now
                </a>
              </div>
              <div className="product-item">
                <img src={product12} alt="T-Shirt 2" />
                <h3>T-Shirt 2</h3>
                <p>Soft and comfortable t-shirt with customizable.</p>
                <a className="cta-button" href="#customize">
                  Customize Now
                </a>
              </div>
              <div className="product-item">
                <img src={product14} alt="T-Shirt 3" />
                <h3>T-Shirt 3</h3>
                <p>Classic t-shirt with various size options.</p>
                <a className="cta-button" href="#customize">
                  Customize Now
                </a>
              </div>
              <div className="product-item">
                <img src={product15} alt="T-Shirt 1" />
                <h3>T-Shirt 1</h3>
                <p>High-quality t-shirt with various color options.</p>
                <a className="cta-button" href="#customize">
                  Customize Now
                </a>
              </div>
              <div className="product-item">
                <img src={product11} alt="T-Shirt 2" />
                <h3>T-Shirt 2</h3>
                <p>Soft and comfortable t-shirt with customizable.</p>
                <a className="cta-button" href="#customize">
                  Customize Now
                </a>
              </div>
              <div className="product-item">
                <img src={product13} alt="T-Shirt 3" />
                <h3>T-Shirt 3</h3>
                <p>Classic t-shirt with various size options.</p>
                <a className="cta-button" href="#customize">
                  Customize Now
                </a>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h1>Secvices</h1>
            <div className="service-container">
              <div className="service-item">
                <img className="images" src={icon7} alt="Service 1" />
                <h3>Custom Designs</h3>
                <p>
                  Our designers can help create a custom design just for you or
                  your business.
                </p>
              </div>
              <div className="service-item">
                <img className="images" src={icon12} alt="Service 2" />
                <h3>Fast Turnaround</h3>
                <p>
                  With our efficient processes, we can deliver your customized
                  t-shirts in record time.
                </p>
              </div>
              <div className="service-item">
                <img className="images" src={icon10} alt="Service 3" />
                <h3>Large Quantities</h3>
                <p>
                  We can handle orders of any size, from a few dozen to
                  thousands of t-shirts.
                </p>
              </div>
              <div className="service-item">
                <img className="images" src={icon9} alt="Service 4" />
                <h3>Quality Materials</h3>
                <p>
                  We use only the highest quality materials for our t-shirts,
                  ensuring they last wear after wear.
                </p>
              </div>
              <div className="service-item">
                <img className="images" src={icon8} alt="Service 5" />
                <h3>Competitive Pricing</h3>
                <p>
                  Our prices are competitive and we offer bulk discounts, making
                  our custom t-shirts an affordable choice.
                </p>
              </div>
              <div className="service-item">
                <img className="images" src={icon11} alt="Service 6" />
                <h3>Easy Ordering</h3>
                <p>
                  Our user-friendly website makes it easy to place your custom
                  t-shirt order in just a few clicks.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
      </Layout>
    </>
  );
};

export default Home;
