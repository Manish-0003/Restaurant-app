import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import banner1 from "../../../assets/banner1.jpeg"
import banner2 from "../../../assets/banner2.jpeg";
import banner3 from "../../../assets/banner3.jpeg";
import banner4 from "../../../assets/banner4.jpeg";
import banner5 from "../../../assets/banner5.jpeg";
import banner6 from "../../../assets/banner6.jpeg";
import banner7 from "../../../assets/banner7.jpeg";
import { useNavigate } from "react-router";

const Home = () => {
  const images = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="hero-section">
          <img
            src={images[currentIndex]}
            alt="Restaurant Banner"
            className="hero-image"
          />

          <div className="hero-content">
            <h1 className="hero-title">Welcome to FoodFusion</h1>
            <p className="hero-subtitle">
              Taste the best dishes crafted with love and perfection.
            </p>

            <button className="hero-btn" onClick={() => navigate("/menu")}>Explore Menu</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
